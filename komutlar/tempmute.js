const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("@kullanıcı");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Yetkilileri Susturamssın");
  let muterole = message.guild.roles.find(`name`, "Susturuldu");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Susturuldu",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Süre Yazmalısın");

  await(tomute.addRole(muterole.id));
  message.channel.send(`<@${tomute.id}> **Başarılıyla Susturuldu** ✅ ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Susturulman Açıldı !`);
  }, ms(mutetime));


//end of module
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2
  };
  
  exports.help = {
    name: 'süreli',
    description: 'İstediğiniz kişiyi  susturur.',
    usage: 'süreli [kullanıcı] [sebep]'
  };