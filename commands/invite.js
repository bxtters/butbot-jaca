module.exports = {
    name: 'invite',
    category: 'Util',
    async execute(message, args, params, client) {
        message.channel.send("To invite me to your server: https://discord.com/oauth2/authorize?client_id=965601237665992725&scope=bot&permissions=2147483656\n If you don't want admin commands, uncheck admin permissions :pensive: ")
    }
}