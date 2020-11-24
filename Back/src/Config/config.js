require('dotenv').config()

const tipoPersistencia = process.env.TIPO_PERSISTENCIA_DEV || 'memoria'
const serverPort = process.env.SERVER_PORT || 1111
const mail = process.env.MAIL || 'tpfinaltp2jbm@gmail.com'
const pass = process.env.PASS || 'Ward2010'
const baseLink = process.env.BASELINK || 'http://localhost'

const config = {
    getTipoPers: () => tipoPersistencia,
    getServerPort: () => serverPort,
    getMail: () => mail,
    getPass: () => pass,
    getBaseLink: () => baseLink
}

module.exports = Object.freeze(config)