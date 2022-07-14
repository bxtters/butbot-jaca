const { Guild } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'serverinfo',
    description: "Shows user information from discord",
    category: "Util",
    execute(message, args, commandName, client, Discord) {
        const Target = message.mentions.users.first() || message.author;
        const jaca = new MessageEmbed()
        .setColor("#36393f")
        .setTitle(`${message.guild}'s Information.`)
        .setDescription(`:desktop:This server has **${message.guild.memberCount} member(s).**\n` + `🌐This server has **${message.guild.emojis.cache.size} emoji(s).**\n` + `⭐This server has **${message.guild.roles.cache.size} role(s).**`)
        message.reply({ embeds: [jaca], allowedMentions: { repliedUser: false } });

    }
}