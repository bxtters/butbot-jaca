const api = require('../api/breakingbad.json');  


module.exports = {
    name: 'breakingbad',
    description: 'funny ',
    category: 'Api',
    aliases: ['b-kmeme ','breakingmeme'],
    async execute(message, args, params, client) {

     let t1 = api.breakingbad[Math.floor(Math.random() * api.breakingbad.length)]
     message.channel.send(`${t1}`)

    }
}