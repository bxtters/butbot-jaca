const { Guild } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');


module.exports = {
    name: 'userinfo',
    description: "Shows user information from discord",
    category: "Util",
    aliases: ['user'],
    execute(message, args, params, client) {
    	const member = message.mentions.members.first() || message.member;
        const isbot = member.user.bot ? 'Yes' : 'No';
        let status =  member.presence?.status ? member.presence?.status : 'Offline';
        if (status === 'dnd') status = 'Do not Disturb';
        else if (status === 'online') status = 'Online';
        let gierki = '';
        if (member.presence?.activites !== 'undefined') {
            for (let i = 0; i < member.presence?.activities.length; i++) {
                if (member.presence?.activities[i].name !== 'Custom Status') {
                    gierki += `${member.presence?.activities[i].name}, `
                }
            }
        }
        
    const Response = new MessageEmbed()
        .setColor('#36393f') 
        .setAuthor(`${member.user.tag}`)
        .setDescription(`🆔${member.id}` + `\n**🎮Presence:** ${gierki.slice(0, gierki.length - 2)}` + `\n**🤖Bot:** ${isbot}`  + `**\n:information_source:Status:** ${status}` + `\n**:globe_with_meridians:Joined Discord:** <t:${Math.round(member.user.createdTimestamp / 1000)}:R>` +`\n**🚪Joined Server:** <t:${Math.round(member.joinedTimestamp / 1000)}:R>`) 
        .addField("Roles:", `\u200B${member.roles.cache.map(r => r).join(' ').replace("@everyone"," ")}`)
        .setTimestamp()
       message.channel.send({ embeds: [Response], allowedMentions: { repliedUser: false } });
    }
}

