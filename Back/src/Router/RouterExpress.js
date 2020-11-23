const express = require('express')
const mailRecordatorio = require ('../HistoriaUsuario/FactoryCU') 


function crearTurnosRouter() {
    router = express.Router()


    router.post('/', (req, res)=>{
        // const recordatorio= req.body
        const aviso= mailRecordatorio.getCUEnviarMail()
        aviso.enviar()
    })

    return router
}


module.exports = { crearTurnosRouter }

