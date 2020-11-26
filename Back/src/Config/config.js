require('dotenv').config()

const serverPort = process.env.SERVER_PORT || 1111

let logEnabled
let tipoPersistencia
let mode = process.env.MODE || 'PROD'

const mail = process.env.MAIL || 'tpfinaltp2jbm@gmail.com'
const pass = process.env.PASS || 'Ward2010'

const baseLink = process.env.BASELINK || 'http://localhost'

const cnxObj = {
    dbName: 'consultorio',
    collectionPacientes: 'pacientes',
    collectionRecetas: 'recetas'
}

if (mode === 'PROD') {
    cnxObj.cnxStr = process.env.CNX_STR_PROD ||'mongodb+srv://tp2:CHtOt67VpfXl2Ehb@cluster0.vzdji.mongodb.net/<dbname>?retryWrites=true&w=majority'
    
    tipoPersistencia = process.env.TIPO_PERSISTENCIA_PROD || 'db'
    logEnabled = true
} else {
    tipoPersistencia = process.env.TIPO_PERSISTENCIA_DEV || 'memoria'
    logEnabled = true
}

const config = {
    getCnxObj: () => Object.freeze(cnxObj),
    getTipoPers: () => tipoPersistencia,
    getServerPort: () => serverPort,
    getMail: () => mail,
    getPass: () => pass,
    isLogEnabled: () => logEnabled,
    getBaseLink: () => baseLink
}

module.exports = Object.freeze(config)