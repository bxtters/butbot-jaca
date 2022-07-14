const DIG = require("discord-image-generation");
const { MessageAttachment } = require("discord.js");


module.exports = {
    name: "notstonks",
    description: "ur dead :D",
    category: 'Image manipulation',
    aliases: ['notstonks','n-t'],
    async execute(message, args, params, client) {
      let personDeleted = message.mentions.users.first();
  
      if (!personDeleted) {
        let authorsAvatar = message.author.displayAvatarURL({ dynamic: false, format: "png" });
        let stonksImage = await new DIG.NotStonk().getImage(authorsAvatar);
        let stonksFile = new MessageAttachment(stonksImage, "stonksAvatar.png");
      
        message.channel.send({ files: [stonksFile] });
      };
      if (personDeleted) {
        let stonksavatar = personDeleted.displayAvatarURL({ dynamic: false, format: "png" });
        let userstonksimage = await new DIG.NotStonk().getImage(stonksavatar);
        let stonksimagefile = new MessageAttachment(userstonksimage, "stonksAvatar.png");
      
        message.channel.send({ files: [stonksimagefile], allowedMentions: { repliedUser: false }  });
      };
    }
  };