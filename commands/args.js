module.exports = {
    name: 'args',
    description: 'Test information about arguments provided',
    aliases:['argsinfo', 'ag'],
    cooldown: 3,
    args: true,
    execute(message,args) {
        if (args[0] === 'foo') {
			return message.channel.send('bar');
         }
         message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
    },
};
