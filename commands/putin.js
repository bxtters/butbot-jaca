const DIG = require("discord-image-generation");
const { MessageAttachment } = require("discord.js");

module.exports = {
  name: "putin",
  description: "poutine",
  category: 'Image manipulation',
  async execute(message, args, params, client) {
    let personDeleted = message.mentions.users.first();

    if (!personDeleted) {
      let authorsAvatar = message.author.displayAvatarURL({ dynamic: false, format: "png" });
      let deleteImage = await new DIG.Poutine().getImage(authorsAvatar);
      let deleteFile = new MessageAttachment(deleteImage, "deleteAvatar.png");
    
      return message.channel.send({ files: [deleteFile] });
    };
    if (personDeleted) {
      let personDeletedAvatar = personDeleted.displayAvatarURL({ dynamic: false, format: "png" });
      let personDeletedImage = await new DIG.Poutine().getImage(personDeletedAvatar);
      let personDeletedFile = new MessageAttachment(personDeletedImage, "deletedAvatar.png");
    
      return message.channel.send({ files: [personDeletedFile], allowedMentions: { repliedUser: false }  });
    };
  }
};