module.exports = {
    name: 'shutdown',
    description: 'shutdown or killnode of the bot',
    aliases: ['killnode'],
    execute(message,args) { // Anyone can use lol try
    message.channel.send("I'm about to die.").then(() => {
           client.destroy();
           process.exit();
           //sudo killall -9 node if all fails in mac terminal, check nodes with $ ps
        })
    }
}