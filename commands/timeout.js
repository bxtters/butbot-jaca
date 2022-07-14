const ms = require('ms');

module.exports = {
    name: 'timeout',
    category: 'Moderation',
    async execute(message, args, params, client) {
        try {
            //if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You don't have permissions to do this 🤔!")
            let member =
              message.mentions.members.first() ||
              message.guild.members.cache.get(args[0]);
            if (!member) return await message.reply("No user was given.");
            const time = args[1];
            if (!time) return await message.reply("No time was given");
            const reason = args.slice(2).join(" ");
            if (!reason) return await message.reply("No reason was given");
            let ttime = ms(time);
            if (ttime === undefined)
              await message.reply(
                "Please make sure the syntax is correct: b!timeout <@user> <time> <reason>"
              );
            await member.timeout(ttime);
            await member
              .send(`You were timed out for **${time}** for doing **${reason}**`)
              .catch((err) => {});
            await message.reply(
              `**${member.user.tag}** got timed out for **${time}** for doing **${reason}**`
            );
          } catch (e) {
            return await message.reply(`${e}`);
          }
        },
      };