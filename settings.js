const fs = require('fs')
const chalk = require('chalk')

//===> FREE API
global.APIs = {
	ryuu: 'https://api-ryubotz.herokuapp.com',
}

global.APIKeys = {
	'https://api-ryubotz.herokuapp.com': 'RyuBotz',
}

//===> ATUR BIAR KALIAN SENENG
global.autoReadGc = true //Ubah Ke false Jika Chat Di Grup Tidak Ingin Di Baca Oleh Bot
global.autoReadAll = true //Ubah Ke true Jika Ingin Seluruh Chat Di Baca Oleh Bot
global.anticall = false //Ubah Ke true Jika Tidak Ingin Bot Blockir Yang Telepon
global.available = true //Ubah Ke false Jika Bot Mu Tidak Ingin Terlihat Online
global.autoTyping = true //Ubah Ke true Jika Ingin Saat Ada Yang Chat Bot Auto Mengetik
global.autoRecord = false //Ubah Ke false Jika Tidak Ingin Saat Ada Yang Chat Bot Auto Merekam
global.multiplier = 69 // Semakin Besar Angkanya Semakin Sulit Untuk Naik Level
global.limitCount = 70 //70 Dah Pas Banh
global.prefa = ['','.','/','#']

//===> UBAH DISINI
global.namaowner = '𝙻𝙴𝙾𝙼𝙾𝚁𝙳𝚇𝙳' //Ganti Jadi Namamu
global.owner = ['62882005687229'] //Kalo Mau Lebih Tambahin Aja
global.nomerowner = '62882005687229' //Owner Utama Istilahnya
global.namabot = '𝙻𝙴𝙾𝙼𝙾𝚁𝙳𝙱𝙾𝚃' //Ganti Jadi Nama Botmu
global.packname = '𝙻𝙴𝙾𝙼𝙾𝚁𝙳𝙱𝙾𝚃' //Sticker Weem
global.author = 'By 𝙇𝙀𝙊𝙈𝙊𝙍𝘿𝙓𝘿' //Sticker Weem
global.webme = 'https://api-ryubotz.herokuapp.com' //Ganti Sama Web Mu
global.linkgroup = 'https://chat.whatsapp.com/D4Ww2QJRs1lEKqkniexY3u' //Ganti Sama Link Gc Mu
global.sessionName = 'session'
global.youtube = 'https://youtube.com/c/RyuukaBotz' //Ganti Sama Link Yt Mu
global.github = 'https://github.com/R-TEAM94' //Ganti Sama Link Github Mu
global.instagram = 'https://instagram.com/leomordbot' //Ganti Sama Link Ig mu

//===> BACKGROUND SETIAP MENU
global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//===> QUOTES BAGIAN MENU
global.quotes1 = 'Apabila Akal Tidak Sempurna Maka Kurangilah Berbicara. ~Ali Bin Abi Thalib'
global.quotes2 = 'Orang Yang Suka Berkata Jujur Mendapatkan Tiga Hal, Yakni Kepercayaan, Cinta, dan Rasa Hormat. ~Ali Bin Abi Thalib'
global.quotes3 = 'Balas Dendam Terbaik Adalah Menjadikan Dirimu Lebih Baik. ~Ali Bin Abi Thalib'

//===> TIPS BAGIAN MENU
global.tips1 = 'Gunakan Jeda 3 Detik Agar Bot Tidak Mati Akibat Spam 🚀'
global.tips2 = 'Jika Kamu Ingin Bermain RPG Hubungi Admin Untuk Mengaktifkan Fitur RPG ⚔️'
global.tips3 = 'Jika Kamu Ingin Request/Repport Fitur, Cukup Ketik *.req/lapor Laporannya* 👮'
global.tips4 = 'Jika Kamu Sedang Gabut, Kamu Bisa Memainkan Fitur Game Yang Tersedia 🕹️'
global.tips5 = 'Jika Kamu Ingin Mendownload Video Youtube, Cukup Ketik *.ytmp4 <link>* 📥'

//===> EDIT SESUAI KEMAUAN MU
global.rpg = {
limitEnd: 'Limit Anda Habis\n\n📝 Note : Limit Akan Di Reset Setiap Jam 21:00',
}

//===> EDIT SESUAI KEMAUANMU
global.mess = {
admin: '*LU ADMIN? 🤨*',
botAdmin: '*BOT BUKAN ADMIN 😔*',
owner: '*LU BUKAN OWNER GW 😠*',
group: '*KHUSUS GROUP 😏*',
private: '*KHUSUS PRIVATE CHAT*',
bot: '*KHUSUS PENGGUNA NOMER BOT*',
wait: '*SABAR SEDANG DI PROSES ...*',
done: '*DONE NGAB 🤗*',
}

//===> KALO MAU MENYESUAIKAN NAMA FILE FOTO NYA
global.thumb = fs.readFileSync('./media/hiruko.jpg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbmp4 = fs.readFileSync('./media/hiruko.mp4')
    
//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
