const Discord = require('discord.js');
const figlet = require('figlet');

module.exports = { 
    name: 'Figlet',
    category: 'fun',
    description: 'Create A Figlet.',
    usage: 'Figlet <Text>',
    aliases: ['figlet', 'flet', 'flt'],
    
   async execute(message, args, params, client) {
        let tx = args.join(" ")
figlet(tx, (err, data) => {
    if (err) return message.channel.send(`\`\`\`\nSomething went wrong!\n${err}\n\`\`\``);
    message.channel.send(`\`\`\`\n${data}\n\`\`\``)
});
},
};