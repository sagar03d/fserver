const catchAsync = require('../catchAsync');
const User = require('../../models/User');
const { WebClient, LogLevel } = require("@slack/web-api");
const slackToken = process.env.slackToken;
const channelId = "C0261NR59ED";

const index = catchAsync(async (req, res) => {

    const client = new WebClient(slackToken, {
      // LogLevel can be imported and used to make debugging simpler
      logLevel: LogLevel.DEBUG
    });

    let conversationHistory;

    try {
      // Call the conversations.history method using WebClient
      const result = await client.conversations.history({
        channel: channelId
      });

      conversationHistory = result.messages;

      // Print results
      res.render('admin/chat',{chats:conversationHistory,chatlength:conversationHistory.length});
      // res.send(conversationHistory.length + " messages found in " + channelId);
    }
    catch (error) {
      console.error(error);
    }

  
});

const sendMessage = catchAsync(async (req, res) => {
    let msg = req.body.text;

    const client = new WebClient(slackToken, {
      logLevel: LogLevel.DEBUG
    });

    try {
      // Call the chat.postMessage method using the WebClient
      const result = await client.chat.postMessage({
        channel: channelId,
        text: msg
      });
      res.json({success:true,data:result})
    }
    catch (error) {
      console.error(error);
    }
});

module.exports = {
  index,
  sendMessage
}