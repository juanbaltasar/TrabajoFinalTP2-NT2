const { crearPacientesDaoMemoria } = require('./PacientesDao.js')
const config = require('../config/config.js')

async function crearPacientesDaoFactory() {

    const tipoPersistencia = config.getTipoPers()

    if (tipoPersistencia === 'memoria')
        return crearPacientesDaoMemoria()
    else if (tipoPersistencia === 'db')
        return await crearPacientesDaoDb(config.getCnxObj())
    else
        throw new Error('invalid type of db')
}

module.exports = { crearPacientesDaoFactory }