const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));   
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'jail',
    description: 'lol ur mom',
    category: 'Image manipulation',
    async execute(message, args, params, client) {
        let oponent1 = message.mentions.members.first();
        if (!oponent1) {
            oponent1 = message.member;
        }
       message.channel.send(`https://some-random-api.ml/canvas/jail?avatar=${oponent1.user.displayAvatarURL().replace('webp', 'png')}`);
    }
}   