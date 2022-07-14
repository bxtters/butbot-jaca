const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
    name: "poll",
    descrpition: "Creates a poll",
    aliases: "",
    category: "redstone",
    async execute(message, args, client) {
        
        let sentence = message.content.split(" ");
        sentence.shift();
        sentence = sentence.join(" ")
        if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply({ content: "You don't have permission!" });
        if(!sentence) return message.reply("You have to provide something!")
        message.delete(2000)
        .then(() => {
        
            const poll = new MessageEmbed()
            .setTitle("Poll")
            .setColor("36393f")
            .setThumbnail(message.author.displayAvatarURL())
            .addField('Vote created by', `${message.author.username}`)
            .addField('Question', `${sentence}`)

            message.channel.send({ embeds : [ poll ] })

            .then(msg => {
                msg.react("👍")
                msg.react("👎🏿")
            })
        })
    }
}