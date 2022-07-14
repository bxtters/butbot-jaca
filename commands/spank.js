const DIG = require("discord-image-generation");
const Discord = require("discord.js");


module.exports = {
  name: "spank",
  description: "spank ass",
  category: "Image manipulation",
 async execute (message, args, client) {
    let personMentioned = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()) || message.member;
    let loadingMessage = await message.reply(`:thinking:`);
    let authorsAvatar = message.author.displayAvatarURL({
      dynamic: false,
      format: "png",
    });
    let personMentionedAvatar = personMentioned.user.displayAvatarURL({
      dynamic: false,
      format: "png",
    });
    let avatars = await new DIG.Spank().getImage(authorsAvatar, personMentionedAvatar);
    let slappedFile = new Discord.MessageAttachment(avatars, "slappedAvatar.png");

    loadingMessage.delete({ timeout: 5000 });
    message.channel.send({files: [slappedFile] });
  }
};