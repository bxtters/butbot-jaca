const DIG = require("discord-image-generation");
const { MessageAttachment } = require("discord.js");


module.exports = {
    name: "bobross",
    description: "paint",
    category: 'Image manipulation',
    async execute(message, args, params, client) {
      let personDeleted = message.mentions.users.first();
  
      if (!personDeleted) {
        let authorsAvatar = message.author.displayAvatarURL({ dynamic: false, format: "png" });
        let stonksImage = await new DIG.Bobross().getImage(authorsAvatar);
        let stonksFile = new MessageAttachment(stonksImage, "stonksAvatar.png");
      
        return message.reply({ files: [stonksFile] });
      };
      if (personDeleted) {
        let stonksavatar = personDeleted.displayAvatarURL({ dynamic: false, format: "png" });
        let userstonksimage = await new DIG.Bobross().getImage(stonksavatar);
        let stonksimagefile = new MessageAttachment(userstonksimage, "stonksAvatar.png");
      
        return message.reply({ files: [stonksimagefile], allowedMentions: { repliedUser: false }  });
      };
    }
  };