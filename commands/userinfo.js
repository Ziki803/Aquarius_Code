module.exports = {
    name: 'userinfo',
    description: 'Userinfo!)',
    aliases: ['user', 'me'],
    cooldown: 2,
    execute(message,args) {
        message.command.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
};