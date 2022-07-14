
module.exports = {
    name: 'uptime',
    category: 'Util',

    async execute(message, args, params, client) {
        let days = Math.floor(client.uptime / 86400000)
        let hours = Math.floor(client.uptime / 3600000) % 24
        let minutes = Math.floor(client.uptime / 60000) % 60
        let seconds = Math.floor(client.uptime / 1000) % 60
        message.channel.send(`I've been up for **${days} days ${hours} hours ${minutes} minutes ${seconds} seconds.**\n${days} days btw <:pogchamp:971059606681944146> `)

    }
}