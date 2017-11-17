'use strict';

var util = require('util');
var path = require('path');
var fs = require('fs');
var SQLite = require('sqlite3').verbose();
var Bot = require('slackbots');

var SeLogerSlackBot = function Constructor(settings) {
    this.settings = settings;
    this.settings.name = this.settings.name || 'norrisbot';
    //this.dbPath = settings.dbPath || path.resolve(process.cwd(), 'data', 'norrisbot.db');

    this.user = null;
    this.db = null;
};

SeLogerSlackBot.prototype.run = function () {
    SeLogerSlackBot.super_.call(this, this.settings);

    this.on('start', this._onStart);
    this.on('message', this._onMessage);
};

SeLogerSlackBot.prototype._onStart = function () {
    this._loadBotUser();
    setInterval(this._welcomeMessage(),1000);
    //this._connectDb();
    //this._firstRunCheck();
};

SeLogerSlackBot.prototype._loadBotUser = function () {
    var self = this;
    this.user = this.users.filter(function (user) {
        return user.name === self.name;
    })[0];
};

SeLogerSlackBot.prototype._welcomeMessage = function () {
    console.log("message");
    this.postMessageToUser("jerome.garec", 'Hello je suis la ').fail(function(data) {
        console.log(data);
    });
    console.log("message2");
};

SeLogerSlackBot.prototype._onMessage = function (message) {
    console.log(message);
  /*  if (this._isChatMessage(message) &&
        this._isChannelConversation(message) &&
        !this._isFromNorrisBot(message) &&
        this._isMentioningChuckNorris(message)
    ) {
        this._replyWithRandomJoke(message);
    }*/
};
// inherits methods and properties from the Bot constructor
util.inherits(SeLogerSlackBot, Bot);

module.exports = SeLogerSlackBot;