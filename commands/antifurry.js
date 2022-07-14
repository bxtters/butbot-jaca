const api = require('../api/antifury.json');  


module.exports = {
    name: 'antifurry',
    description: 'Anti furry',
    category: 'Api',
    aliases: ['a-furry ','furry'],
    async execute(message, args, params, client) {

     let t1 = api.antifurrymemes[Math.floor(Math.random() * api.antifurrymemes.length)]
     message.channel.send(`${t1}`)

    }
}