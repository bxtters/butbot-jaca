const DIG = require("discord-image-generation");
const { MessageAttachment } = require("discord.js");


module.exports = {
    name: "beautiful",
    description: "ur beautiful",
    category: 'Image manipulation',
    async execute(message, args, params, client) {
      let personDeleted = message.mentions.users.first();
      let loadingMessage = await message.reply(`:thinking:`);
  
      if (!personDeleted) {
        let authorsAvatar = message.author.displayAvatarURL({ dynamic: false, format: "png" });
        let stonksImage = await new DIG.Beautiful().getImage(authorsAvatar);
        let stonksFile = new MessageAttachment(stonksImage, "stonksAvatar.png");
        loadingMessage.delete({ timeout: 5000 });
      
        return message.channel.send({ files: [stonksFile] });
      };
      if (personDeleted) {
        let stonksavatar = personDeleted.displayAvatarURL({ dynamic: false, format: "png" });
        let userstonksimage = await new DIG.Beautiful().getImage(stonksavatar);
        let stonksimagefile = new MessageAttachment(userstonksimage, "stonksAvatar.png");
      
        return message.channel.send({ files: [stonksimagefile], allowedMentions: { repliedUser: false }  });
      };
    }
  };