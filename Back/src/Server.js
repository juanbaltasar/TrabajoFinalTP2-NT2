const express = require ('express')

function crearServidor(puerto, db){
    
    return new Promise((resolve, reject)=>{
        const app = express()
        app.get('/api/turnos', async(req, res) => {
            res.json (await db.getTurnos())
        })
        const server = app.listen(puerto)
        .on('listening', ()=> resolve(server))
        .on('error', ()=> reject(new Error('address in use')))

    })
}

module.exports = {crearServidor}
