const api = require('../api/tigerapi.json');  


module.exports = {
    name: 'tigerbonzo',
    description: 'tigerbonzo',
    category: 'Api',
    aliases: ['tigerbonzo ','tiger'],
    async execute(message, args, params, client) {

     let t1 = api.tiger[Math.floor(Math.random() * api.tiger.length)]
     message.channel.send(`${t1}`)

    }
}