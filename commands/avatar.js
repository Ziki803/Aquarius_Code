module.exports = {
    name: 'avatar',
    description: 'Avatar!',
    cooldown: 1,
    aliases: ['icon', 'pfp', 'av'],
    execute(message) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar is <≈`)
        }
          const avatarList = message.mentions.users.map(user => {
                return `${user.username}'s avatar: ${user.displayAvatarURL}>`;
            });
            message.channel.send(avatarList);  
    },
  };