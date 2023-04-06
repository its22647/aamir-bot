let handler = async (m, { conn, text }) => {
   if (!text) throw `Enter Text For Bot's New Bio`
     try {
		await conn.updateProfileStatus(text).catch(_ => _)
		conn.reply(m.chat, 'Success, Changing Bot Bio', m)
} catch {
       throw 'Well, Error...'
     }
}
handler.help = ['setbotbio <teks>']
handler.tags = ['owner']
handler.command = /^setbiobot|setbotbio$/i
handler.owner = true

export default handler
