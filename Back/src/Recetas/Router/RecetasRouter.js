const express = require('express')
const path = require('path');
const CUFactory = require('../../HU/CUFactory.js')

let wrap = fn => (...args) => fn(...args).catch(args[2])

function crearRecetasRouter(aplicacion) {
    router = express.Router()

    const recetasApi = aplicacion

    router.get('/', wrap(async (req, res) => {
        const recetas = await handleGet(recetasApi, req.query)
        res.json(recetas)
    }))

    router.get('/:file', wrap(async (req, res) => {
        const file = req.params.file
        const fileLocation = path.join('./back/files', file)
        //const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
        res.download(fileLocation, file);
    }))
    
    router.post('/CU/:id', wrap(async (req, res) => {
        const CUMandarMail = CUFactory.getCUEnviarLink()
        CUMandarMail.invocar(req.params.id)
    }))

    return router
}

async function handleGet(api, query) {

    if (query.dni) {
        return await api.getByDni(query.dni)
    }

    return await api.getAll()
}

module.exports = { crearRecetasRouter }