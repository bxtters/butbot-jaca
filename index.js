const { Client, Intents, MessageEmbed, Collection } = require('discord.js');
const music = require('@koenie06/discord.js-music');
const fs = require('fs');
const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_PRESENCES,
		Intents.FLAGS.GUILD_VOICE_STATES,
	], 
	ws: {
		properties: {
			$browser: "Discord Android",
		},
	},
});
const { token } = require("./config.json")
const { prefix } = require("./config.json")


client.on('ready', () => {
	console.log(client.user.tag + ` connected`);
	function astatus() { 
	 let status = [`${prefix}help | Guilds: ${client.guilds.cache.size} pogchamp`
	   ,` ${prefix}help | Users: ${client.users.cache.size}
	   `];
	   let watching = ({ type: 'WATCHING' });
		let S = Math.floor(Math.random() * status.length);
		 client.user.setActivity(status[S], watching) ;
		 };
	setInterval(astatus, 5000)
	
	
    
	})


client.slash = new Collection();
const slashFiles = fs.readdirSync('./slash').filter(file => file.endsWith('.js'));

for (const file of slashFiles) {
	const slash = require(`./slash/${file}`);
	client.slash.set(slash.data.name, slash);
}

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) {
        const command = client.slash.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        }
        catch (error) {
            console.error(error);
            await interaction.followUp({ content: `An error occurred :hushed:, please try again or contact the developer.`, ephemeral: true });
        }
		
    }
});

client.on('message', async (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	const params = args.slice(0).join(" ");

	if (!command) return;
	try {
		command.execute(message, args, params, client);
	} catch (error) {
		console.error(error);
		message.reply('An error occurred :hushed:, please try again or contact the developer.');
	}
});


client.snipes = new Map()
client.on('messageDelete', function(message, channel) {
	client.snipes.set(message.channel.id, {
		content: message.content,
		author: message.author.id,
		image: message.attachments.first() ? message.attachments.first().proxyURL : null
	})
})


client.login(token);