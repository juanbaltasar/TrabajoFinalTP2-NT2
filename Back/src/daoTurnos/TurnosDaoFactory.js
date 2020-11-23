const { crearTurnosDaoMemoria } = require ("./TurnosDaoMemoria.js")
const {crearTurnosDaoDB} = require ("./TurnosDaoDB.js")
const config = require('../config/config')


async function crearTurnosDao(){

    const tipoPersistencia = config.getTipoPers()

    if (tipoPersistencia === 'memoria') return crearTurnosDaoMemoria()
    else if (tipoPersistencia === 'db') return await crearTurnosDaoDB(config.getCnxObj())
    else throw new Error ('Persistencia no valida')
}

module.exports={crearTurnosDao}