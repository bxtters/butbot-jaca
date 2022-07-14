const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));   
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ph',
    description: '',
    category: 'Image manipulation',
    async execute(message, args, params, client) {
        let target = message.mentions.members.first();
        if (!target) {
            target = message.member;
        }

        const magik = await fetch(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${target.user.displayAvatarURL({format: "png", dynamic: true, size: 2048}).replace('webp', 'png')}`).then(res => res.json());
        if (magik.error) {
            return message.reply(magik.error);x 
        }
        message.channel.send(`the api is weak and takes a long time xdxd` + magik.message)
    }
}