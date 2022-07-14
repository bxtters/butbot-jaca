const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment");

module.exports = {
    name: 'npminfo',
    category: 'dev',

    async execute(message, args, params, client) {
        if(message.author.id === '734033858067955754');
        
        let query = args.join(' ');
        if (!query) query = await awaitMessages(message);
        if (!query) return;
        const res = await fetch(`https://registry.npmjs.com/${encodeURIComponent(query)}`).catch(err => console.log(err));
        if (res.status === 404) return message.channel.send('No search results found, maybe try searching for something that exists.');
        const body = await res.json();
        const embed = new MessageEmbed()
            .setColor(`36393f`)
            .setTitle(body.name)
            .setURL(`https://www.npmjs.com/package/${body.name}`)
            .setDescription(body.description || 'No description.')
            .addField('❯ Version', body['dist-tags'].latest, true)
            .addField('❯ License', body.license || 'None', true)
            .addField('❯ Author', body.author ? body.author.name : '???', true)
            .addField('❯ Creation Date', moment.utc(body.time.created).format('YYYY/MM/DD hh:mm:ss'), true)
            .addField('❯ Modification Date', body.time.modified ? moment.utc(body.time.modified).format('YYYY/MM/DD hh:mm:ss') : 'None', true)
            .addField('❯ Repository', body.repository ? `[View Here](${body.repository.url.split('+')[1]})` : 'None', true)
            .addField('❯ Maintainers', body.maintainers.map(user => user.name).join(', '))
        message.channel.send({embeds: [embed]});
       async function awaitMessages(message) {
        let responce;
    
        return responce;

       };
    }
}
    

