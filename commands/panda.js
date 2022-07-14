const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));   
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'panda',
    description: 'Random panda',
    category: 'Api',
    async execute(message, args, params, client) {
        const fox = await fetch('https://some-random-api.ml/animal/panda').then(res => res.json());
        message.channel.send(fox.image)
    }
}