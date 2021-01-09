module.exports = {
    name: 'say',
    description: 'Say!',
    execute(message,args) {
        if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === 'pingpongpoom') {
			return message.channel.send('pingpongpoom');
    }
    message.channel.send(`${args[0]}`);
     }
  };