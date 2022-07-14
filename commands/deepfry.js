const fetch = require("node-fetch")
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "deepfry",
    description: "Deepfry someone!",
    category: "Image manipulation",
    async execute(message, args, params, client) {
        const user = message.mentions.members.first() || message.member
        const avatar = user.user.displayAvatarURL({ dynamic: false, size: 4096})
        fetch(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${avatar}`)
        .then((res) =>  res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setColor('36393f')
            .setImage(data.message)
            message.channel.send({embeds: [embed]})
        })
    }
}