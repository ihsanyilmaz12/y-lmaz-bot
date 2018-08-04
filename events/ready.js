const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] Yılmaz BOT: Aktif, Komutlar yüklendi !!`);
  console.log(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] Yılmaz BOT: ${client.user.username} ismi ile Sunucuya Giriş Yapıldı!`);
  client.user.setStatus("online");
  client.user.setGame(`..yardım|Türkiye`);
  console.log(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] Yılmaz BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] Yılmaz BOT: Şu an ` + client.channels.size + ` Adet Kanal Toplam ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +  ` Kullanıcı Bulunmaktadır`);
};
