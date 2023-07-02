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
  let inponya = `*Apa Itu Premium?*
  _Premium adalah membership bot_
  _dengan keuntungan yaitu user_
  _premium akan mendapatkan_
  _unlimited Limit dan beberapa fitur_
  _tambahan._
  
  *Apa Itu VIP?*
  _VIP adalah membership khusus_
  _grup dimana seluruh anggota_
  _grup akan mendapat seluruh fitur_
  _premium didalam grup tersebut_
  _Grup VIP juga akan dapat_
  _menggunakan semua fitur di !_
  _menugrup, selain itu Grup VIP akan_
  _mendapatkan fitur online store_
  _jika kamu ingin menggunakan bot_
  _untuk menyimpan list produk kamu_
  _dan memudahkan pembeli melihat_
  _daftar produk yang kamu jual._
  
  *Cara Memesan:*
  _1.Mengirim nominal sesuai harga_
  _membership yang akan dibeli_
  _2.Mengirim bukti bayar ke nomor owner (https:/${nomorowner}_
  _3.Tunggu owner melakukan proses_
  _upgrade user._
  
*List Harga*
  Premium: 15k/bulan
  Group VIP:20k/bulan
  
  *Pembayaran:*
  Dana Only!
  *Dana : 08893729854
  
  *Catatan:*
  _-Premium Untuk Pribadi, Vip Untuk Grup_
  _-Lakukan Konfirmasi Pembayaran Ke Owner_
  _-Harga +5k Jika Pembayaran Via Pulsa_`

conn.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: "IDR",
          amount1000: fsizedoc,
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: inponya,
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


handler.help = ['pesen', 'vip']
handler.tags = ['info']
handler.command = ['pesen', 'vip']
export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
