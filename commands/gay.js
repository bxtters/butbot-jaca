const DIG = require("discord-image-generation");
const { MessageAttachment } = require("discord.js");


module.exports = {
    name: "gay",
    description: "gay",
    category: 'Image manipulation',
    async execute(message, args, params, client) {
      let personDeleted = message.mentions.users.first();
  
      if (!personDeleted) {
        let authorsAvatar = message.author.displayAvatarURL({ dynamic: false, format: "png" });
        let gayImage = await new DIG.Gay().getImage(authorsAvatar);
        let gayFile = new MessageAttachment(gayImage, "stonksAvatar.png");
      
        return message.channel.send({ files: [gayFile] });
      };
      if (personDeleted) {
        let gaysavatar = personDeleted.displayAvatarURL({ dynamic: false, format: "png" });
        let userstonksimage = await new DIG.Gay().getImage(gaysavatar);
        let gayimagefile = new MessageAttachment(userstonksimage, "stonksAvatar.png");
      
        return message.channel.send({ files: [gayimagefile], allowedMentions: { repliedUser: false }  });
      };
    }
  };