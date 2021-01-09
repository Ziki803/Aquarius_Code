module.exports ={
    name: 'reload',
    description: 'Reloads a command',
    aliases: ['restart', 'reboot', 'rb', 'rs', 'update'],
    cooldown: 1,
    execute(message,args) {
        if (!args.length) return message.channel.send(`I need a command to XMLHttpRequestUpload, ${message.author}!`);
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName)
            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if(!command) {
            return message.channel.send(`There is no command with such name or alias yet with \`${commandName}\`, ${message.author}!`);
            }

        delete require.cache[require.resolve(`./${command.name}.js`)];

         try {
             const newCommand = require(`./${command.name}.js`);
             message.client.commands.set(newCommand.name, newCommand);
            } catch (error) {
                console.error(error);
                message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
            }
         message.channel.send(`Command \`${command.name}\` was updated!`);

    },
};