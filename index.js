var Bot = require('slackbots');

// create a bot
var settings = {
    token: 'xoxb-50114019072-2jY0nlYbBbw1atBNIR7bNwqs',
    name: 'ceo-bot'
};
var bot = new Bot(settings);

bot.on('start', function() {
    bot.postMessageToChannel('general', 'Hello channel!');
    bot.postMessageToUser('l4chong', 'hello bro!');
});

