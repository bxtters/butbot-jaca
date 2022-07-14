const DIG = require("discord-image-generation");
const { MessageAttachment } = require("discord.js");

module.exports = {
    name: "lisapresentation",
    category: "Image manipulation",
    aliases: ['lisapresentation', 'lp'],

    async execute(message, args, client) {
      let lisaPresentation = args.join(" ");
      let loadingMessage = await message.reply(`:thinking:`);
      
      if (!lisaPresentation) {
        return message.channel.send("You have to present a presentation for Lisa!");
      } else {
        let lisaPresentationImage = await new DIG.LisaPresentation().getImage(lisaPresentation);
        let lisaPresentationFile = new MessageAttachment(lisaPresentationImage, "lisaPresentation.png");
        
        return message.channel.send({ files: [lisaPresentationFile], allowedMentions: { repliedUser: false } });
      };
    }
  };
