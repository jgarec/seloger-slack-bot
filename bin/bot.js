#!bin/bot.js

'use strict';

var SelogerSlackBot = require('../lib/seloger-slack-bot');

var token = process.env.BOT_API_KEY;
//var dbPath = process.env.BOT_DB_PATH;
var name = process.env.BOT_NAME;

var selogerSlackBot = new SelogerSlackBot({
    token: token,
  //  dbPath: dbPath,
    name: "seloger"
});

selogerSlackBot.run();
