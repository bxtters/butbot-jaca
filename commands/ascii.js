const figlet = require('figlet');

module.exports = {
    name: "ascii",
    category: "Util",
    aliases: ["ascii", "a-t"],
    
    async execute(message, args, client) {
        if(!args[0]) return message.channel.send('⚠ Provide atleast a text')

        let msg = args.join(" ");
        figlet.text(msg, function(err, data){
            
            if(data.length > 900) return message.channel.send("⚠ Sorry, that word is too long")
            message.reply({ content: ('```' + data + '```'), allowedMentions: { repliedUser: false }})
         
        })
    }
}