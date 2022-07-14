
module.exports = {
    name: "suggest",
    aliases: ["Feedback"],
 async execute(message, args, params, client) { 
    if (message.guild.id !== '623878944684507143') return message.reply('Local command.');

    const Discord = require("discord.js");
    const arg = message.content.split(" ").slice(1);
    const place = client.channels.cache.get('813083909586812928')
    const member = message.mentions.members.first() || message.member;
    
   if(!args[0]) return message.channel.send("Hey! To suggest something you need to send something!")
    
   const embed = new Discord.MessageEmbed()
   .setThumbnail(member.displayAvatarURL({dynamic: true}))
   .setColor('RED')
   .addFields(
    { name: 'Submitter', value: `${message.author.username}` },
    { name: 'Suggestion', value: `${arg.join(" ")}` }
   )    
   .setTimestamp()
   .setFooter(`User ID: `+ member.id)
    place.send({embeds: [embed]}).then(m => {
        m.react("✅");
        m.react("❎");
        })
    message.reply(`Suggested in ${place}`)
  }
  }