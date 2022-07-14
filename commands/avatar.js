
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    description: "Displays the user's avatar",
    category: "Util",
    execute(message, args, commandName, client, Discord) {
        const Target = message.mentions.users.first() || message.author;

        message.channel.send(`\`${Target.tag}\`'s avatar is  ` + Target.displayAvatarURL({format: "png", dynamic: true, size: 2048}))
    }
}