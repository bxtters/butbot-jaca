const DIG = require("discord-image-generation");
const { MessageAttachment } = require("discord.js");


module.exports = {
    name: "train",
    description: "train thomas",
    category: 'Image manipulation',
    async execute(message, args, params, client) {
      let personDeleted = message.mentions.users.first();
  
      if (!personDeleted) {
        let authorsAvatar = message.author.displayAvatarURL({ dynamic: false, format: "png" });
        let stonksImage = await new DIG.Thomas().getImage(authorsAvatar);
        let stonksFile = new MessageAttachment(stonksImage, "stonksAvatar.png");
      
        return message.channel.send({ files: [stonksFile] });
      };
      if (personDeleted) {
        let stonksavatar = personDeleted.displayAvatarURL({ dynamic: false, format: "png" });
        let userstonksimage = await new DIG.Thomas().getImage(stonksavatar);
        let stonksimagefile = new MessageAttachment(userstonksimage, "stonksAvatar.png");
      
        return message.channel.send({ files: [stonksimagefile], allowedMentions: { repliedUser: false }  });
      };
    }
  };