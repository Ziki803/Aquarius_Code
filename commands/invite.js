module.exports = {
    name: 'invite',
    description: 'Invite!',
    execute(message,args) {
       message.channel.send(`You can invite me at \nhttps://discord.com/oauth2/authorize?client_id=767733955196747816&scope=bot`);
     }
  };