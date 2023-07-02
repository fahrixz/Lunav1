
let handler = async (m, { conn, args, text, usedPrefix }) => {
let pp = `${rul}`
let link = 'https://www.geocities.ws/mrrwith/Aine-Untukmu.html'
setTimeout(() => {
conn.reply(m.chat, 'Nah Ini Untuk Kamu...\nSilahkan Diklik Ya Buttonya><', null, { contextInfo: { forwardingScore: 9999, isForwarded: true, externalAdReply: { mediaType: 1, mediaUrl: pp, title: wm, thumbnail: { url: pp }, thumbnailUrl: pp, sourceUrl: link, renderLargerThumbnail: true }}})
}, 15000)
setTimeout(() => {
conn.reply(m.chat, 'Ciee.. nungguin nih hehe', m)
}, 10000)
setTimeout(() => {
conn.reply(m.chat, 'Mau liat nggak kamu? 😆', m)
}, 5000)
setTimeout(() => {
conn.reply(m.chat, 'Aku punya kejutan spesial loh untuk mu.. 😅', m)
}, 0)
}
handler.help = ['forme']
handler.tag = ['internet']
handler.command = /^(forme)$/i

export default handler