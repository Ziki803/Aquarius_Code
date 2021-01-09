module.exports = {
    name: 'play',
    description: 'play a song from youtube, pass in a link',
    aliases:['youtube'],
    cooldown: 2,
    execute(message,args) {
        const ytdl = require('ytdl-core');
        const connection = message.member.voice.channel.join();
        const client = require('../app.js')
        
        if (message.member.voice.channel) {
                if (args != null) {
                const urlToParse = args;
                console.log('args is not null, validating function')
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
                    const stream = ytdl(String(args), {filter: 'audioonly'});
                    const dispatcher = connection.play(stream);
    
                    dispatcher.on('start', () => {
                        console.log('audio.mp3 is now playing!');
                    });
                    
                    dispatcher.on('finish', () => {
                        console.log('audio.mp3 has finished playing!');
                    });
    
                    dispatcher.on('error', console.error);
                
                    } else {
                        message.channel.send(`${message.author}, I am not in a vc!`);
                    } 
            } else {
                message.channel.send(`${message.author}, you need to provide a url!`);
            }   
        }    
}