import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────═[»»———- ɓσƭ ɓყ: ααɱเɾ ———-««]═────⋆
│╭───────────────···
┴│    HI ${conn.getName(m.mubashir)}
⬡│       ..I\'m alive now..
┬╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│            *»»————- ααɱเɾ ————-««*
⬡│ *WHATSAPP BOT CODED BY👇🏽*
⬡│         *𝐀𝐀𝐌𝐈𝐑*
⬡│         *OWNER:*
⬡│   *wa.me/923351483179*
⬡│ 
⬡│ 
⬡│  🅐🅐🅜🅘🅡'🅢 𝗕𝗼𝘁 𝗶𝘀 𝗔𝗹𝗶𝘃𝗲
⬡│   
┬│   
│╰────────────────···
┠─────═[ GUIDE ]═─────⋆
│╭────────────────···
┴│ _*👇🏽Litle Guide to use bot👇🏽*_
⬡│ .menu *All menu of bot*
⬡│ .sticker *Image to sticker*
⬡│ .play *Youtube video/audio*
┬│ .gimage *Google image downloader*
│╰────────────────···
╰──────────═┅═───────
*Thanks For Using 🅐🅐🅜🅘🅡'🅢 𝗕𝗼𝘁*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
