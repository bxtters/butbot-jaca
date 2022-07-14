// cipa  https://meme-api.herokuapp.com/gimme
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));   
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'badmeme',
    description: 'bad meme',
    category: 'Fun',
    async execute(message, args, params, client) {
    	const meme = await fetch('https://meme-api.herokuapp.com/gimme').then(res => res.json());
        const Target = message.mentions.users.first() || message.author;
        message.channel.send(meme.url);
    },
};