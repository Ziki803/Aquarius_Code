module.exports = {
    name: 'purge',
    description: 'Purge!',
    execute(message,args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('Aquarius says that is not a valid number')
        } else if (amount < 2 || amount > 100) {
            return message.reply ('a number between 2 and 100 has not been inputted')
        }
    
        message.channel.bulkDelete(amount, true).then()
        message.channel.send(`${amount} messages deleted yay`).catch(err => {
          console.error(err);
          message.channel.send('aquarius sadly says an error has occured, please try again later')
        });
    }
}