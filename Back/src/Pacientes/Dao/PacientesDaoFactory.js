const { crearPacientesDaoMemoria } = require('./PacientesDao.js')
const { crearPacientesDaoDb } = require('./PacientesDaoDb.js')
const config = require('../../Config/config.js')

async function crearPacientesDaoFactory() {

    const tipoPersistencia = config.getTipoPers()

    if (tipoPersistencia === 'memoria') {
        return crearPacientesDaoMemoria()
    } else if (tipoPersistencia === 'db') {
        return await crearPacientesDaoDb(config.getCnxObj())
    } else {
        throw new Error('invalid type of db')
    }
}

module.exports = { crearPacientesDaoFactory }