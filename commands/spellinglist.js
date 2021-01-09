

module.exports = {
    name: 'spellinglist',
    description: 'Your weekly vocabularies to learn.',
    aliases: ['spelling_list', 'sp', 'weeklysp'],
    cooldown: 4,
    disable: 1,
    execute(message,args) {
        message.channel.send(``)
        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#99D7F8')
                .setTitle(`**Spelling List Time**\n`)
                .setDescription(`1. industrialization
        2. gustatory
        3. portrayed
        4. factorization
        5. manufactured
        6. propaganda
        7. variable
        8. bugles
        9. development
        10. emphasize`)  
        .setTimestamp() 
        .setFooter('hahaha what is this')
    message.channel.send(`${message.author}`, exampleEmbed);
    }       
}