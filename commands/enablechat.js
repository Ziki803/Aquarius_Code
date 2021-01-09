module.exports = {
    name: 'enablechat',
    description: 'Enable chat bot function',
    aliases:[],
    cooldown: 1,
    execute(message,args) {
        let chatBotActivated = true;
        message.channel.send(`${message.author} chat bot has been activated`)
    }
};
