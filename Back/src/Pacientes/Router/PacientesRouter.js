const express = require('express')
const path = require('path');
const CUFactory = require('../../HU/CUFactory.js')

let wrap = fn => (...args) => fn(...args).catch(args[2])

function crearPacientesRouter(aplicacion) {
    router = express.Router()

    const pacientesApi = aplicacion

    router.get('/', wrap(async (req, res) => {
        const pacientes = await handleGet(pacientesApi, req.query)
        res.json(pacientes)
    }))

    router.get('/:file', wrap(async (req, res) => {
        const file = req.params.file
        const fileLocation = path.join('./back/files', file)
        //const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
        res.download(fileLocation, file);
    }))

    router.get('/recetas/:id', wrap(async (req, res) => {
        try {
            const CUMandarMail = await CUFactory.getCUEnviarLink()
            await CUMandarMail.invocar(req.params.id)
            res.sendStatus(200)
        } catch {
            res.status(500).json(error)
            console.log(res)
        }
    }))

    return router
}

async function handleGet(api, query) {

    if (query.id) {
        return await api.getById(query.id)
    }

    return await api.getAll()
}

module.exports = { crearPacientesRouter }