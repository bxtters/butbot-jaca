module.exports = {
    name: 'forceinvite',
    category: 'dev',
    async execute(message, args, params, client) {
        if(message.author.id === '734033858067955754') return;

        const id = args[0];
        if(!args[0]) return message.reply('Give me server ID');
        const guild = client.guilds.cache.get(id);
        if (!guild) return message.reply('Wrong ID');
        await guild.channels.fetch();
        let invite = false;
        do {
            const ch = guild.channels.cache.random();
            if (ch.type === 'GUILD_TEXT' || ch.type === 'GUILD_VOICE') {
                invite = await ch.createInvite(
                    {
                        maxAge: 600000,
                        maxUses: 100
                    });
            }
        } while (!invite)

        message.reply(`discord.gg/${invite.code}`); 
    }
}       