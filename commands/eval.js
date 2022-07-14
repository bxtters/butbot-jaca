const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "eval",
  description: "eval",
  category: "dev",
  
 async execute (message, args, params, client) {
    
  if (message.author.id !== '734033858067955754') return;
     try {
      const code = args.join(" ");
      if (!code) {
        return message.channel.send("Give me code to eval");
      }
      let evaled = eval(code);
      

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

     if (evaled.length > 1024) return message.channel.send('Too many symbols');
        let embed2 = new MessageEmbed()
        
        .setDescription(`\`\`\`${evaled}\`\`\``)
      //  .addField("Output", `\`\`\`${evaled}\`\`\``)
        .setColor('#36393f');
        
        embed2.setFooter({ text: 'eval ', iconURL: 'https://cdn.discordapp.com/avatars/965601237665992725/454b666ed2209ce89a503a24e5320f9a.png?size=2048' });

      message.channel.send({ embeds: [embed2] });
    } catch (err) {
      message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
    }
  } 
}
