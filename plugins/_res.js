import fetch from "node-fetch"
import { readFileSync } from "fs"



export async function all(m) {

  //Kalo mau menggokil pake ini
 // let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

  let stc = await( await fetch("https://tinyurl.com/2zgv83se")).buffer()

if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

    // ketika ditag 
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.sendMessage(m.chat, { sticker : stc, thumbnail: thumb , contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6282142108243',
title: '「 ❔ 」',
body: me,
sourceUrl: 'https://wa.me/6282142108243', thumbnail: thumb
  }
 }}, { quoted: m })
        }
    } catch (e) {
        return
    }

                                
}
