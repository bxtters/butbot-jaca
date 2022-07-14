const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    description: "Command list",
    aliases: ['h'],
    execute(message) {
        const Target = message.mentions.users.first() || message.author;

        const { commands } = message.client;

        let imagemanipulation = '';
        let moderation = '';
        let randomapi = '';
        let util = '';
        let funny = '';
        let porno = '';
        commands.forEach(command => {
            if (command.category === 'Image manipulation') {
                imagemanipulation += `\`${command.name}\`, `;
            }
            else if (command.category ===  'Api') {
                randomapi += `\`${command.name}\`, `;
            }
            else if (command.category ===  'Util') {
                util += `\`${command.name}\`, `;
            }
            else if (command.category ===  'Moderation') {
                moderation += `\`${command.name}\`, `;
            }
            else if (command.category ===  'Fun') {
                funny += `\`${command.name}\`, `;
            }
            else if (command.category ===  'Porn') {
                porno += `\`${command.name}\`, `;
            }
        })

        const Response = new MessageEmbed()
        //.setColor('36393f')
      //  .setAuthor({ name: '[if you need command descriptions, click me]', url: 'https://www.toptal.com/developers/hastebin/gerorajavi.md' })
        .setThumbnail(Target.displayAvatarURL({dynamic: true}))
       // .setTitle('Command list:')
       // .setURL('https://youtu.be/B1qkNiIOElw')
        .setFields(
            { name: ' Moderation:', value: moderation},
            { name: ' Fun:', value: funny},
            { name: ' Util:', value: util},
            { name: ' Image manipulation:', value: imagemanipulation },
            { name: ' API:', value: randomapi },
            { name: ' Adult API [nsfw]:', value: porno },
        )
        .setTimestamp(Date.now());

        message.reply({embeds: [Response]});
    }
}