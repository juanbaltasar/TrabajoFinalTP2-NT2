const express = require('express')
const path = require('path');
const CUFactory = require('../HU/CUFactory.js')

let wrap = fn => (...args) => fn(...args).catch(args[2])

function crearRecetasRouter() {
    router = express.Router()

    router.get('/:file', wrap(async (req, res) => {
        const file = req.params.file
        const fileLocation = path.join('./back/files', file)
        //const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
        res.download(fileLocation, file);
    }))
    router.post('/', wrap(async (req, res) => {
        const dni = 123
        const CUMandarMail = CUFactory.getCUEnviarLink()
        CUMandarMail.invocar(dni)
    }))

    return router
}

module.exports = { crearRecetasRouter }