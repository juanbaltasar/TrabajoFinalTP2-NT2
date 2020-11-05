const express = require('express')
const { crearRecetasRouter } = require('../Router/Router.js')

function createServer({ port = 0}) {

    const app = express()

    app.use(express.json())

    app.use('/', crearRecetasRouter())

    return new Promise((resolve, reject) => {
        const server = app.listen(port)
            .once('error', () => {
                reject(new Error('error al conectarse al servidor'))
            })
            .once('listening', () => {
                server.port = server.address().port            
                resolve(server)
            })
    })
}

module.exports = { createServer }