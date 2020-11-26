const express = require('express')
const config = require('../Config/config.js')
const { crearRecetasRouter } = require('../Recetas/Router/RecetasRouter.js')
const { crearPacientesRouter } = require('../Pacientes/Router/PacientesRouter.js')

const { crearRecetasApi } = require('../Recetas/Aplicacion/RecetasApi.js')
const { crearRecetasDaoFactory } = require('../Recetas/Dao/RecetasDaoFactory.js')

const { crearPacientesApi } = require('../Pacientes/Aplicacion/PacientesApi.js')
const { crearPacientesDaoFactory } = require('../Pacientes/Dao/PacientesDaoFactory.js')

let recetasDao
let pacientesDao

async function createServer({ port }) {

    const app = express()

    app.use(express.json())

    recetasDao = await crearRecetasDaoFactory(config.getCnxObj())
    const recetasApi = crearRecetasApi(recetasDao)
    pacientesDao = await crearPacientesDaoFactory(config.getCnxObj())
    const pacientesApi = crearPacientesApi(pacientesDao)

    app.use('/api/recetas', crearRecetasRouter(recetasApi))
    app.use('/api/pacientes', crearPacientesRouter(pacientesApi))

    app.use(errorHandler)

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

function errorHandler(error, req, res, next) {
    if (error.type === 'INVALID_ARGS') {
        res.status(400)
    } else if (error.type === 'NOT_FOUND') {
        res.status(404)
    } else if (error.type === 'INTERNAL_ERROR') {
        res.status(500)
    } else {
        res.status(520)
    }
    res.json({ message: error.message })
}

module.exports = { createServer }