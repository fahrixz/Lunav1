let handler = async (m, { conn, usedPrefix }) => {
	conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomasupan/kayes?apikey=e6acac24b9', 'asupan.mp4', 'Nih kak\n2023 © Legacy Botz', m)
}
handler.help = ['kayes']
handler.tags = ['asupan']

handler.command = /^(kayes)$/i
handler.premium = false
handler.limit = 1

export default handler