import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────═[𝕀𝕥'𝕤 𝔸𝕒𝕞𝕚𝕣]═────⋆
│╭───────────────···
┴│☂︎    HEY ${conn.getName(m.mubashir)}
⬡│☂︎   ..I\'m alive now..
┬╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│            *𝑩𝒐𝒕 𝒃𝒚: 𝑨𝒂𝒎𝒊𝒓*
 │
⬡│☂︎ *WHATSAPP BOT CODED BY👇🏽*
⬡│☂︎           *𝐀𝐚𝐦𝐢𝐫*
⬡│☂︎           *OWNER:👇🏽*
⬡│☂︎      *wa.me/923351483179*
⬡│☂︎ 
⬡│☂︎  -─═┳︻ 𝕀𝕥'𝕤 𝔸𝕒𝕞𝕚𝕣 ︻┳═─-
⬡│☂︎    
┬│☂︎ 
│╰────────────────···
┠─────═[ GUIDE ]═─────⋆
│╭────────────────···
┴│☂︎ _*👇🏽Litle Guide to use bot👇🏽*_
⬡│☂︎ .menu *All menu of bot*
⬡│☂︎ .sticker *Imagage to sticker*
⬡│☂︎ .play *Youtube video/audio*
┬│☂︎ .gimage *Google image downloader*
│╰────────────────···
╰──────────═┅═───────
*Thanks For Using -─═┳︻ 𝕀𝕥'𝕤 𝔸𝕒𝕞𝕚𝕣 ︻┳═─- MD
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
