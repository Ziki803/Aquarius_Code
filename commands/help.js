const { prefix } = require('../config.json')

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
    cooldown: 1,

    execute(message, args) {
    const Discord = require('discord.js');
    const helpembed = new Discord.MessageEmbed()
        .setColor('#99D7F8')
        .setTitle('My Commands List')
        .setDescription(`**Moderation & utility** \`\`\`args, avatar, ban, beep, ping, shutdown, reload, userinfo, server, kick, purge, invite\`\`\` \n **Counting** \`\`\`enablecount, disablecount, enablecountreactions, disablecountreactions, nextno, count \`\`\` \n **VC** \`\`\`join, leave\`\`\` \n **Fun** \`\`\`sorry, spellinglist, about\`\`\``)
        .setFooter('ask me if u have anything')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL())


    message.channel.send(helpembed)
    //message.channel.send(`${message.author}`, helpembed)
    }
    
    //#region 
    /* execute(message, args) {
        const data = [];
        const { commands } = message.client;

     if (!args.length) {
            data.push(`${message.author} \n Here\'s a list of all of Aquarius\' commands **self updating** :D`)
            data.push(`\`\`\``)
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\`\`\``)
            data.push(` Please send \`${prefix}help [command name]\` to learn more about a specific command!! \n_Including to check aliases_, also **commands are checked in dms!**`)
    
        return message.channel.send(data, { split: true }) //message.author.send or message.channel.send
            .then(() => {
                if (message.channel.type === 'dm') return;
                    //message.reply ('I\'ve sent you a DM with all my commands!')
            })
            .catch(error => {
                console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                message.reply('it seems like I can\'t DM you! Do you have DMs disabled?')
        });
     }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find (c => c.aliases.includes(name));

        if (!command) {
        return message.reply('no such thing! not a valid command!')
    }

    data.push(`**Name** ${command.name}`);

    if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
    if (command.description) data.push(`**Description:** ${command.description}`);
    if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`); 

    data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

    message.channel.send(data, { split: true});
     
	},
*/
//#endregion
}