const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));   
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'dog',
    description: 'Random dog',
    category: 'Api',
    async execute(message, args, params, client) {
        const image = await fetch('https://some-random-api.ml/img/dog').then(res => res.json());
        message.channel.send(image.link)
    }
}