const fs = require('fs')
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const { debug } = require('console');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const cooldowns = new Discord.Collection();

for (const file of commandFiles) {
  const command = require (`./commands/${file}`);
  client.commands.set(command.name, command);
}

let countBotActivated = 0;
let countBotReactionsActivated = 0;
let count = 0;
let chatBotActivated = 0;

const ytdl = require('ytdl-core');
const { Player } = require('discord-player');
client.player = new Player(client);

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
//counting code 
//#region
if (message.content === `${prefix}count`) {
  const avatarList = message.mentions.users.map(user => {
    return `${user.username}'s avatar: ${user.displayAvatarURL}>`;
});
  const countembed = new Discord.MessageEmbed()
      .setTitle('Count Command List 🔢')
      .setDescription(`\`enablecount\`, \`disablecount\`, \`enablecountreactions\`, \`disablecountreactions\`,  \`nextno\`,  \`count\` \n \n **If nothing happens do \`${prefix}enablecount!\` & \`${prefix}enablecountreactions\`!**`)
      .setFooter('if u find any issues dm joyouscakepie#3103 thx')
      .setColor('#99D7F8')
      .setThumbnail(message.author.displayAvatarURL()) //'https://cdn.discordapp.com/avatars/767733955196747816/e749a0b5b5eed38892064666af676e6c.jpg?size=512'
      .setTimestamp()
    message.channel.send(`${message.author}`, countembed);
}

if (message.content === `${prefix}enablecount`) {
  countBotActivated = 1;
    message.channel.send(`${message.author} counting functionality has been **activated**. counting will count towards the bot.`);
}

if (message.content === `${prefix}disablecount`) {
  countBotActivated = 0;
    message.channel.send(`${message.author} counting functionality has been **deactivated**. counting will not count towards the bot anymore.`);
}

if (message.content === `${prefix}enablecountreactions`) {
  countBotReactionsActivated = 1;
    message.channel.send(`${message.author} counting functionality has been **activated**. counting will count towards the bot.`);
}

if (message.content === `${prefix}disablecountreactions`) {
  countBotReactionsActivated = 0;
    message.channel.send(`${message.author} counting functionality has been **deactivated**. counting will not count towards the bot anymore.`);
}

if (message.content === `${prefix}nextno`) {
  const avatarList = message.mentions.users.map(user => {
    return `${user.username}'s avatar: ${user.displayAvatarURL}>`;
    });

    const countembed = new Discord.MessageEmbed()
      .setTitle('Your next number in this server')
      .setDescription(`**${message.author.username}** \n the next number is \`${count+1}\``)
      .setFooter(`${countBotActivated}. If this number is 0, do ${prefix}enablecount to continue counting, ${prefix}disablecount to stope`)
      .setColor('#99D7F8')
      .setThumbnail(message.author.avatarURL())
    message.channel.send(`${message.author}`, countembed);
}

//console.log(`${countBotActivated}`)
if (countBotActivated === 1) {
  if (message.author.bot) return;
  if (isNaN(message.content)) return;
    if (Number(message.content) === count + 1) {
      count = count + 1;
      if (countBotReactionsActivated === 1) {
      message.react('😄');
      }
    } 
    else if (message.author.id !== client.user.id) {
      count = 0;
      message.channel.send(`**${message.author} messed up! 💔 Resetting back to ${count + 1}!**`)
        .catch(console.error);
        if (countBotReactionsActivated === 1) {
          message.react('😡');
        }
    }
  }


  //#endregion

  //chatbot code
  //#region 
  if (message.content === `${prefix}enablechat`) {
    chatBotActivated = 1;
      message.channel.send(`${message.author} chatbot functionality has been **enabled**. I will no longer respond to casual talk.`);
  }
  
  if (message.content === `${prefix}disablechat`) {
    chatBotActivated = 0;
      message.channel.send(`${message.author} chatbot functionality has been **disabled**. counting will not count towards the bot anymore.`);
  }

  if (chatBotActivated === 1) {
  }
  //#endregion

  if (message.content === `${prefix}setbotstatus`) {
    client.user.setPresence({ watching: { name: 'The Brightest Star in the Galaxy' }, status: 'online' }); 
    console.log('running setbotstatus');
  }
  //online, idle, dnd, invisible 
  //listening, playing, watching, streaming, custom status
 
  //voice
  //#region
  if (message.content === `${prefix}join`) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      message.guild.me.voice.setDeaf(true);
      const joinembed = new Discord.MessageEmbed()
        .setColor('#beaeff')
        .setDescription(`${message.author}, I joined the vc`)
        .setTimestamp()
      message.channel.send(joinembed)
    } else {
      message.channel.send(`${message.author}, you need to be in a vc first!`);
    }
  }

  if (message.content === `${prefix}leave`) {
    const connection = await message.member.voice.channel.join();
    connection.disconnect(); //voiceChannel.leave(); both ok
    message.channel.send(`On request from ${message.author}, left the vc 🚪`);
  }
  //#endregion

    //trimming prefixes
  //#region 
  if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  //#endregion

  if (message.content.startsWith(`${prefix}play`)) {
    const ytdl = require('ytdl-core');
        const connection = await message.member.voice.channel.join();
        
        if (message.member.voice.channel) {
                if (args != null) {
                const urlToParse = args;
                //console.log('args is not null, validating function')
                    function validateYouTubeUrl(urlToParse){
                        if (urlToParse) {
                            var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
                            if (url.match(regExp)) {
                                return true;
                            }
                        } else return false;
                    } 
                }

                if (validateYouTubeUrl = true) {
                  //console.log('in validated yturl')
                    console.log('at dispatcher')
                    //console.log(String(args))

                    const broadcast = client.voice.createBroadcast();
                    //const dispatcher = broadcast.play(ytdl(String(args)));
                    const dispatcher = broadcast.play('/Users/leevincent/Movies/BJ/MP3/58. How Far I\'ll Go (Instrumental).mp3');
                    } else {
                        message.channel.send(`${message.author}, I am not in a vc!`);
                    } 
            } else {
                message.channel.send(`${message.author}, you need to provide a url!`);
            }   
        }    

  //aliases and UX UI
  //#region
  const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (command.guildOnly && message.channel.type === 'dm' ) {
    return message.reply('I can\'t execute that command inside DMs!');
  } 
  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;
  
    if (command.usage) {
    reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }
    return message.channel.send(reply);
  }
  //#endregion

//cooldowns
//#region 
 if (!cooldowns.has(command.name)) {
   cooldowns.set(command.name, new Discord.Collection());
 }

 const now = Date.now()
 const timestamps = cooldowns.get(command.name);
 const cooldownAmount = (command.cooldown || 2) * 1000 

 if (timestamps.has(message.author.id)) {
   const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000; //in ms
      return message.reply(`give it a chill, wait me ${timeLeft.toFixed(1)} more seconds before using ${command.name} again ok`)
    }
 }

 timestamps.set(message.author.id, now);
 setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
 //#endregion

  //errors
 //#region
if (command.RunTypeValue = 1) {
  try {
   command.execute(message, args);
 } catch (error) {
     console.error(error);
     message.reply('there was an error trying to execute that command!');
 }
}
//#endregion
});

client.login(token)