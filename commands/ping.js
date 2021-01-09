module.exports = {
    name: 'ping',
    description: 'Ping!',
    aliases:['p'],
    cooldown: 1,
    execute(message,args) {
        message.channel.send(`Pong!!! ${Date.now() - message.createdTimestamp}ms!!!`);
    },
};