const Discord = require("discord.js");

module.exports = {
    name: 'kick',
    category: 'Moderation',
    async execute(message, client) {
    if(!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You don't have permissions to do this 🤔!")
    let member = message.mentions.members.first()
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!member) return message.channel.send("You didn't mention a member!")
    if(!reason) reason = "No reason specified!"
    member.kick()
    .then(() => {
        message.channel.send(`${message.author} kicked ${member} lol :rofl:\n**reason:** ${reason}`)
    })
    .catch(() => {
        message.channel.send("An error occured while running this command :hushed:, Try running the command again!")
    })
}
}