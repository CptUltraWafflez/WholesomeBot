const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("with your heart!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type ==="dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}hello`){
    return message.channel.send("Hello!");
  }

  if (message.content.startsWith ("ily")) {
    message.channel.send ("ilyt", {files: ["./images/image (1).jpg"]});
  }

  image (1)= "./images/image (1).jpg"; image (2) = "./images/image (2).jpg"; image (3) = "./images/image (3).jpg";
  if (msg.includes ("ily")) {
    number = 3;
    var random = Math.floor (Math.random() * (number - 1 + 1)) +1;
    switch (random) {
      case 1: message.channel.send ({ files: [image (1)] }); break;
      case 2: message.channel.send ({ files: [image (2)] }); break;
      case 3: message.channel.send ({ files: [image (3)] }); break;
    }
  }

});

bot.login(botconfig.token);
