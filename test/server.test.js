const {enviarReceta} = require('../src/Modules/downloadModulo.js')
const express = require('express')
const app = express()
const PORT = 1234

// describe('si no encuentra el archivo', () => {
//     describe('lanza un error', () => {
//         enviarReceta('/')
//     })
// })

// app.listen(PORT, function (err) {
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
//     open('http://localhost:' + PORT + '/test.pdf', {app: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"});

// })

// app.close()