import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw 'Mau nanya apa?'
let dann = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkey}&text=${text}&user=user-unique-id`)
let hasil = await dann.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['internet','tools']
handler.command = /^(ai|lcy|openai)$/i

export default handler