import request from 'request'
import cheerio from 'cheerio'
import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
setTimeout(() => {
 conn.reply(m.chat, 'Sedang Dibuat Mohon Tunggu Sebentar...', m)
}, 1)
setTimeout(() => {
conn.reply(m.chat, 'Processing 50%', m)
}, 1000)
   let response = args.join(' ').split('|')
  let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
 let pp = await conn.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/5f09dc3e6c13c8f23ecb0.jpg')
    let { premium, level, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let name = conn.getName(who)
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    if (!args[0]) throw 'Masukkan Text\nContoh: NIK|Nama Provinsi|Nama Kabupaten|Nama Kamu|Tempat/Tanggal Lahir|Gender|Nama Kabupaten|Nama Rt|Desa|Kecamatan|Agama|Status Keluargaan (Bebas)|Kegiatan (Hmm..)|Region (Indonesia)|Seumur Hidup(Bisa Diisi Tanggal Lu)'
  let res = `https://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${response[0]}&prov=${response[1]}&kabu=${response[2]}&name=${response[3]}&ttl=${response[4]}&jk=${response[5]}&jl=${response[6]}&rtrw=${response[7]}&lurah=${response[8]}&camat=${response[9]}&agama=${response[10]}&nikah=${response[11]}&kerja=${response[12]}&warga=${response[13]}&until=${response[14]}&img=${pp}`
    conn.sendFile(m.chat, res, 'ktp.jpg', `Nih kak\n${global.wm}`, m, false)
}
handler.help = ['ktp'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(ktp)$/i
handler.limit = false

export default handler
