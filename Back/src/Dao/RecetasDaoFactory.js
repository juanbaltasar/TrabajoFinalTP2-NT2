const { crearRecetasDaoMemoria } = require('./RecetasDao.js')
const config = require('../config/config.js')

function crearRecetasDaoFactory() {

    const tipoPersistencia = config.getTipoPers()

    if (tipoPersistencia === 'memoria')
        return crearRecetasDaoMemoria()
    else if (tipoPersistencia === 'db')
        return await crearRecetasDaoDb(config.getCnxObj())
    else
        throw new Error('invalid type of db')
}

module.exports = { crearRecetasDaoFactory }