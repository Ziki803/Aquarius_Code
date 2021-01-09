module.exports = {
    name: 'sorry',
    description: 'sorry',
    cooldown: 2, 
    execute(message,args) {
        message.channel.send('I\'m sorry _______, because_______(truthfully)')
    },
};