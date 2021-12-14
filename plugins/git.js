const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("1639216696704.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*ALVINser bot created by ALVIN k*
*Creator number : wa.me/918848059497?text=Hi%20ALVIn%20K.%20*

*Bot setting video : https://youtu.be/_D4ZYuUSXjs*

*Githublink (Setup)  :    https://github.com/alvinterror/ALVIN-ser/edit/master/plugins/git.js*

*Audio commads :   https://github.com/ameer-kallumthodi/pikachu/tree/master/uploads*

*creator : https://wa.me/c/994401498743*

*My whatsapp group : https://chat.whatsapp.com/LCv6cMWvm8ZDdEQSOcaTPH* 

*APPO SHARI ENNA 😜*
`}) 

}));
