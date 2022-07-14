const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'snipe',
    category: 'Util',
    async execute(message, args, params, client) {
       // if (message.guild.id === '623878944684507143') return message.reply('disabled due to bypassing censorship on this server xdxd');    
        const msg = client.snipes.get(message.channel.id)
        if(!msg) return message.channel.send("didnt't catch any deleted messages 🙄")
        const embed = new MessageEmbed()
        .setColor('36393f')
        .setDescription(`**<@${msg.author}> bro got sniped in <#${message.channel.id}> ‼**` + `\n**Content:  **` + msg.content)
        .setTimestamp()
        if(msg.image) embed.setImage(msg.image)
        message.channel.send({embeds: [embed]})
    }
}