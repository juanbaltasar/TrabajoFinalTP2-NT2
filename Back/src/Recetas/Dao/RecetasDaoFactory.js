const { crearRecetasDaoMemoria } = require('./RecetasDao.js')
const { crearRecetasDaoDb } = require('./RecetasDaoDb.js')
const config = require('../../Config/config.js')

async function crearRecetasDaoFactory() {

    const tipoPersistencia = config.getTipoPers()

    if (tipoPersistencia === 'memoria') {
        return crearRecetasDaoMemoria()
    } else if (tipoPersistencia === 'db') {
        return await crearRecetasDaoDb(config.getCnxObj())
    } else {
        throw new Error('invalid type of db')
    }
}

module.exports = { crearRecetasDaoFactory }