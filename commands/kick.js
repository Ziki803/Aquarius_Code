module.exports = {
    name: 'kick',
    description: 'Kick Test (currently fake)!',
    aliases: ['yeet'],
    guildOnly: true,
    execute(message) {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
    
     //const taggedUser = message.mentions.users.first();
     //message.channel.send(`You are going to kick: ${taggedUser}, he gone out the window (disabled lol)`);
 
        let member = message.mentions.users.first() || client.users.cache.get(args[0]);
        if (member) {
        const user = message.guild.member(member);
        if (user) {
            user.kick('user was being bad')
            .then(() => message.reply('Successfully kicked.'))
            .catch(err => { });
             }
        }
    }
}
