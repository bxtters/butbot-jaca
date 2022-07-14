const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "serverlist",
  category: "developer",
  async execute(message) {
        const client = message.client
        const guilds = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount)
        const authorid = message.author.id;
        if(authorid !== '734033858067955754') return;
      let guild = guilds.map(g => `${g.name} - ${g.memberCount} [${g.id}]`);
      let members = new MessageEmbed()
      .setColor('36393f')
      .setDescription(`**Servers list** = **__${client.guilds.cache.size}__**\n **Members** = **__${client.users.cache.size}__**` )
      let tempE = new MessageEmbed()
      .setColor('36393f')
      .setDescription(`**1st:** ${guild[0]}\n**2nd:** ${guild[1]}\n**3rd:** ${guild[2]}\n**4th:** ${guild[3]}\n**5th:** ${guild[4]}\n**6th:** ${guild[5]}\n**7th:** ${guild[6]}\n**8th:** ${guild[7]}\n**9th:** ${guild[8]}\n**10th:** ${guild[9]}`)
      message.reply({ embeds: [members, tempE] });

    }
}   