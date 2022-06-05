let util = require('util')
let path = require('path')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let vn = './sc.mp3'
conn.sendFile(m.chat, vn, 'sc.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true, contextInfo: { 
         externalAdReply: { 
             title: 'Nih Bang Scriptnya..',  
             body: 'Semoga Bermanfaat 🗿👍', 
             description: '', 
             mediaType: 2, 
           thumbnail: await (await fetch('https://i.pinimg.com/originals/66/30/37/663037f00539f3bc1dbd3efeae0d700b.jpg')).buffer(), 
          mediaUrl: `https://youtu.be/35w7z9QFLwY` 
         } 
      } 
   })
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
