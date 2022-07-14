module.exports = {
    name: 'ping',
    description: 'Bot delay information.',
    category: "Util",
    async execute(message, args, params, client) {
        let editm = (`${Date.now() - message.createdTimestamp}`);
        let apil = (`${Math.round(client.ws.ping)}`);
        message.channel.send('Pong 🏓!').then (async (msg) =>{


            msg.delete()
            message.channel.send(":newspaper: Edit time:" + `\`${editm}ms\`` + "\n:cloud: Discord latency: " + `\`${apil}ms\``); 
          })
          }
        }