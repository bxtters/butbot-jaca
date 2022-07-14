const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));   
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hug',
    category: 'Fun',
    async execute(message, args, params, client) {
        let oponent1 = message.mentions.members.first();
        if (!oponent1) {
            return message.reply('You need to tag the person!')
        }
        const oponent2 = await fetch('https://some-random-api.ml/animu/hug').then(res => res.json());
        let mentioned = message.mentions.members.map(m => m).join(', ');
        const embed = new MessageEmbed()
        .setColor('36393f')
        .setDescription(`***${message.author} hugs ${mentioned}, aww cute💕***`)
        .setImage(oponent2.link)
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
    }
}