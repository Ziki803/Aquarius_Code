module.exports = {
    name: 'beep',
    cooldown: 1, 
    description: 'beep',
    execute(message,args) {
        message.channel.send('Boop.')
    },
};