const { SlashCommandBuilder } = require('@discordjs/builders');
const tags = require('../tags.json');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tag')
		.setDescription('tags lol')
        .addStringOption(option =>
            option.setName('argumenty')
            .setDescription('<nazwa> || add <nazwa> <treść> || remove <nazwa>')
            .setRequired(false)),
	async execute(interaction) {
        if (!interaction.options.getString('argumenty')) {
            let txt = '';
            // eslint-disable-next-line prefer-const
            for (let i in tags) {
                txt = txt + '`' + tags[i].name + '`, ';
            }
            return await interaction.reply({ content: '/tag <nazwa>\n\nDostępne tagi:\n' + txt, ephemeral: true });
        }
        else {
            const args = interaction.options.getString('argumenty').trim().split(/ +/);

            if (args[0] === 'add') {
                if (args[1] && args[2]) {
                    const nazwat = args[1];
                    const tresct = args.slice(2).join(' ');
                    // eslint-disable-next-line prefer-const
                    for (let i in tags) {
                        if (tags[i].name == nazwat) {
                            return interaction.reply({ content: `Tag o nazwie ${nazwat} już istnieje!`, ephemeral: true });
                        }
                    }
                    tags[nazwat] = {
                        name: nazwat,
                        // eslint-disable-next-line comma-dangle
                        text: tresct
                    // eslint-disable-next-line semi
                    }
                    fs.writeFile("./tags.json", JSON.stringify(tags, null, 4), err => {
                        if (err) throw err;
                        interaction.reply({ content: "Dodano tag `" + nazwat + "` o treści `" + tresct + "`", ephemeral: true });
                    });
                }
            }
            else if (args[0] === 'remove') {

                if (args[1]) {
                    const nazwat = args[1];
                    let deleted = false;
                    // eslint-disable-next-line prefer-const
                    for (let i in tags) {
                        if (tags[i].name == nazwat) {
                            delete tags[i];
                            interaction.reply({ content: "Usunięto tag o nazwie " + nazwat, ephemeral: true });
                            deleted = true;
                        }
                    }
                    if (!deleted) {
                        interaction.reply({ content: "Nie znaleziono taga o nazwie " + nazwat, ephemeral: true });
                    }
                }
            }
            else {
                let found = false;
                // eslint-disable-next-line prefer-const
                for (let i in tags) {
                    if (tags[i].name == args[0]) {
                        interaction.reply({ content: tags[i].text });
                        found = true;
                    }
                }
                if (!found) {
                    let txt = '';
                    // eslint-disable-next-line prefer-const
                    for (let i in tags) {
                        txt = txt + '`' + tags[i].name + '`, ';
                    }
                    return await interaction.reply({ content: '/tag <nazwa>\n\nDostępne tagi:\n' + txt, ephemeral: true });
                }
            }
        }
	},
};