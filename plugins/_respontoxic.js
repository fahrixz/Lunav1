import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.sender
const time = moment.tz('Asia/Jakarta').format('HH')
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let name = await conn.getName(m.sender)
  let kata = `*乂  B O T  -  S C R I P T*

	◦  *Name* : Luna Botz
	◦  *Visitor* : 50
	◦  *Size* : 14,89 MB
	◦  *Updated* : 21/03/23 - 08:28:01
	◦  *Url* : https://github.com/fahrixz/Luna-Botz.git
    °  *Based By*: https://youtube.com/@FXzMultiDevice_
        _*Luna Botz*_
    
	   267 Forks · 50 Stars · 4 Issues
`
 
conn.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: "USD",
          amount1000: fsizedoc,
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: kata,
                  contextInfo: {
                      mentionedJid: [m.sender],
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, {})
}


handler.help = ['sc', 'sewasc']
handler.tags = ['info', 'main']

handler.command = /^(sc|script|sewasc)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 


function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
