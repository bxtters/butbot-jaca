const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));   

module.exports = {
    name: 'magik',
    description: '',
    category: 'Image manipulation',
    async execute(message, args, params, client) {
        let mention = message.mentions.members.first();
        let target = false;
        if (mention) target = mention.user.displayAvatarURL({format: "png", dynamic: true, size: 2048}).replace('webp', 'png');
        if (!target) target = args[0];
        const magik = await fetch(`https://nekobot.xyz/api/imagegen?type=magik&image=${target}`).then(res => res.json());
        if (magik.error) {
            return message.reply(magik.error);
        }
        message.channel.send(magik.message)
    }
}