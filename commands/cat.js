const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));   
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'cat',
    description: 'Random cat',
    category: 'Api',
    async execute(message, args, params, client) {
        const image = await fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json()); 
        message.channel.send(image[0].url)
    }
}