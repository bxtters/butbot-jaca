const os = require('os');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ramusage',
    category: 'Util',
    aliases: ['ram'],
    async execute(message, args, params, client) {
            const ramusage = ((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(2); 
            const freeram = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
            const system = (os.platform());

            message.reply(`**:cd:Ram usage:** ${ramusage}/${freeram}GB \n**:desktop:System:** ${system}`)
    }
}