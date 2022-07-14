const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));   
module.exports = {
    name: 'binary',
    description: 'Binary code',
    category: 'Fun',
    async execute(message, args, params, client) {
        const kod = await fetch(`https://some-random-api.ml/binary?encode=${params}`).then(res => res.json());
        if (kod.error) {
            return message.reply(kod.error);
        }
       message.channel.send(`ur code: ` + kod.binary)
    }
}