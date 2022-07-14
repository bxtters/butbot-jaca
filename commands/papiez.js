const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));   
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'papiez',
    description: 'Random papiez',
    category: 'Api',
    async execute(message, args, params, client) {
        const papiez = await fetch('https://api.mopsior.pl/api/papiez').then(res => res.json());
        message.channel.send(papiez.link)
    }
}   