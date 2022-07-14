const Discord = module.require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
 
 
module.exports = {
  name: "thigh",
  description: "Sends hentai ass pictures.",
  category: 'Porn',
 async execute (message, args, params, client) {
    var errMessage = "This is not a NSFW Channel";
    if (!message.channel.nsfw) {
      message.react("💢");
 
      return message.reply(errMessage).then((msg) => {
        setTimeout(() => msg.delete(), 3000);
      });
    }
 
    const image = await nsfw.thigh();
    const embed = new Discord.MessageEmbed()
    .setURL(`https://www.reddit.com/r/porn/`)
    .setImage(image);
    message.channel.send({ embeds: [embed] });
  },
};