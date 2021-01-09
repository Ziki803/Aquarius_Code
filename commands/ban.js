
module.exports = {
    name: 'ban',
    description: 'Ban Them',
    aliases: ['ban'],
    guildOnly: true,
    execute(message) {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to ban them!');
        }
    
     //const taggedUser = message.mentions.users.first();
     //message.channel.send(`You are going to ban: ${taggedUser}, he gone out the window (disabled lol)`);
 
        let member = message.mentions.users.first() || client.users.cache.get(args[0]);
        if (member) {
        const user = message.guild.member(member);
        if (user) {
            user.ban('user was being bad')
            .then(() => message.reply('Successfully banned.'))
            .catch(err => { });
             }
        }
    }
}
