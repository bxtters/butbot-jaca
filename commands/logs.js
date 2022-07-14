const fs = require('fs');

module.exports = {
    name: "logs",
    async execute(message, args, params, client) {
        const { MessageAttachment } = require('discord.js');
        const execSync = require('child_process').execSync;
        const log = execSync('forever logs 0');
    fs.writeFileSync('./log.txt', log, (err) => {
    if (err) throw err;
    });
const txt = new MessageAttachment('./log.txt', 'log.txt'); 
message.channel.send({ files: [txt] });
    }
}