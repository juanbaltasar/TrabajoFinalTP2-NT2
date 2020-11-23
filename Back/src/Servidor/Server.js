const express = require ('express')
const {crearTurnosRouter} = require ('../Router/RouterExpress')

function crearServidor(port, aplicacion){

    const app = express()

    app.use(express.json())

    app.use('/api/recordatorio', crearTurnosRouter())

    // app.use(manejadorDeErrores)

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

module.exports = {crearServidor}
