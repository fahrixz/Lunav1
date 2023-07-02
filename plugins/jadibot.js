const {
    DisconnectReason,
    MessageRetryMap,
    useSingleFileAuthState,
    fetchLatestBaileysVersion,
    toBuffer
} = (await import('@adiwajshing/baileys')).default
import WebSocket from 'ws'
import qrcode from 'qrcode'
import simple from './lib/simple2.js'
import fs from 'fs'

const imports = (path) => {
 path = require.resolve(path)
  let modules, retry = 0
  do {
    if (path in require.cache) delete require.cache[path]
    modules = require(path)
    retry++
  } while ((!modules || (Array.isArray(modules) || modules instanceof String) ? !(modules || []).length : typeof modules == 'object' && !Buffer.isBuffer(modules) ? !(Object.keys(modules || {})).length : true) && retry <= 10)
  return modules
}

const isNumber = x => typeof x === 'number' && !isNaN(x)

global.tryConnect = []
if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
	let conns = global.conn
	
if(conn.user.jid !== conns.user.jid) return m.reply('Tidak bisa membuat Bot pada user jadibot!')
	
//if (!global.users[m.sender].acc) return m.reply('Nomor kamu belum di Acc Owner, silahkan chat owner')

    let auth = false
    let authFile = 'plugins/jadibot/'+m.sender.split`@`[0]+'.data.json'
    let isInit = !fs.existsSync(authFile)
    let id = global.conns.length
    let { state, saveState} = useSingleFileAuthState(authFile)
    let { version } = await fetchLatestBaileysVersion()
    
const config = { 
    version: version, 
    printQRInTerminal: false,
    auth: state, 
    receivedPendingNotifications: false
    }
    conn = simple.makeWASocket(config)
    let ev = conn.ev
    
    let date = new Date()
    let timestamp = date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    conn.timestamp = timestamp
    
    async function needUpdate(update) {
        const { connection, lastDisconnect, qr} = update
        date = new Date
        console.log(update) 
        timestamp = date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
        conn.timestamp = timestamp
        if(qr) {
        	if (!isNumber(global.tryConnect[m.sender])) global.tryConnect[m.sender] = 0
        	if (global.tryConnect[m.sender] === 5) {
        	    global.tryConnect[m.sender] = 0
                return m.reply('Waktu scan qr kamu sudah habis!')
            }
            let scan = await conns.sendFile(
                m.chat, 
                await qrcode.toDataURL(qr, { scale: 8 }), 
                'qrcode.png', 
                'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk Whatsapp Web\n3. Scan QR ini\nQR Expired dalam 20 detik',
                m
            )
            setTimeout(() => {
                conns.sendMessage(m.chat, { delete: scan.key } )
            }, 30000)
            global.tryConnect[m.sender] += 1
        }
        if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut && conn.ws.readyState !== WebSocket.CONNECTING) {
            global.tryConnect(true)
            m.reply('Connecting...')
        } else if(connection === 'open'){
        	conns.reply(m.chat, `Berhasil tersambung dengan *Jadibot*\n\nNomor: ${conn.user.jid.split`@`[0]}\nJoin: ${timestamp}\n`, m)
            global.tryConnect[m.sender] = 0
            global.conns[m.sender] = conn
        } else if(connection === 'close'){
        	m.reply('koneksi terputus!! wait...') 
        } else {
        	m.reply('Report Owner! BugError: '+lastDisconnect.error.output)
        }
    }
    
    global.tryConnect = function tryConnect(restatConn, close) { 
        let handlers = imports('../handler')	
        conn.welcome = 'Selamat datang @user!'
        conn.bye = 'Selamat tinggal @user!'
        conn.spromote = '@user sekarang admin!'
        conn.sdemote = '@user sekarang bukan admin!'
        conn.handler = handlers.handler.bind(conn)
        conn.connectionUpdate = needUpdate.bind(conn)
        conn.credsUpdate = saveState.bind(conn)
    
        if (restatConn) {
            try { conn.ws.close() } catch { }
            conn = {
                ...conn, ...simple.makeWASocket(config)
            }
        }
        
        conn.ev.on('messages.upsert', conn.handler)
        conn.ev.on('connection.update', conn.connectionUpdate)
        conn.ev.on('creds.update', conn.credsUpdate)
        conn.ev.on('call', conn.onCall)
        conn.ev.on('group-participants.update', conn.onGroupUpdate)
        isInit = false
        return true
    }
    await global.tryConnect()
}
handler.help = ['jadibot']
handler.tags = ['tools']
handler.command = /^jadibot$/i
handler.private = false
handler.group = false
module.exports = handler