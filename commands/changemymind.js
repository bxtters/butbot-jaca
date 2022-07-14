const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));   
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'changemymind',
    description: 'Base64 encode',
    category: 'Image manipulation',
    async execute(message, args, params, client) {
        if (!args[0]) return message.reply("Please provide arguments!");

        message.channel.send(`https://badboy.is-a.dev/api/image/cmm?text=${encodeURI (args.join(" "))}`)
    }
}
        
