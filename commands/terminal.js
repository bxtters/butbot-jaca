const { Client, Message, MessageEmbed } = require("discord.js")
const child = require("child_process");

module.exports = {
    name: "terminal",
async execute (message, args, params, client)  {
  if(message.author.id !== '734033858067955754') return;

  const command = args.join(" ");
  if(!command) return message.reply("Please spectify a command to execute!");

  child.exec(command, (err, res) => {
 if(err) return console.log(err);
const embed = new MessageEmbed()
.setDescription(res.slice(0, 2000), { code: 'js'});
embed.setFooter({ text: 'terminal ', iconURL: 'https://cdn.discordapp.com/avatars/965601237665992725/454b666ed2209ce89a503a24e5320f9a.png?size=2048' });

message.channel.send({ embeds: [embed]})
  })
    },
};