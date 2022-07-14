const { MessageEmbed } = require('discord.js')
 
module.exports = {
    name: "butbot",
    category : "Fun",
    async execute(message, args, client) {
        let repli = [
            "No.",
            "Never!",
            "NOT POSSIBLE",
            "Impossible.",
            "Nope.",
            "Nah",
            "N O",
            "Yes.",
            "Yeah.",
            "Definitely.",
            "Certainly!",
            "Ofcourse.",
            "YEEEEEEEEE",
            "Yup",
            "Amogos 😳",
        "Sussy.",
        "What",
        "Wait what",
        "ur mom",
        "ur furry lol stfu",
        "Ask me later im busy with your mom",
        "yesnt",
        "sus"
        ]

    let no = new MessageEmbed()
    .setDescription("🗿 | butbot needs a question to give an answer.")
.setColor("36393f")

let replies = repli[Math.floor(Math.random() * repli.length)]

let question = args.join(" ")
    if(!question) return message.reply({embeds: [no]})


let answer = new MessageEmbed()
    .addField("**Question ❓**", `*${question}?*`)
    .setTitle('butbot answers your question.')
     
    .addField("**Answer 🎱**", `${replies}`)
    .setColor("36393f")
    

    message.channel.send({embeds: [answer]})

    

    
}

}