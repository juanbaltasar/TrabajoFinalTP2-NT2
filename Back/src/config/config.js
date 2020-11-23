require('dotenv').config()

let tipoPersistencia
const user= process.env.MAIL || 'tpfinaltp2jbm@gmail.com'
const pass= process.env.PASS || 'Ward2010'
const serverPort= process.env.SERVER_PORT || 0
const cnxObj = {
    dbName: 'ort',
    collectionName: 'turnos',
}
const mode= process.env.MODE ||'cloud'

if (mode === 'cloud') {
    cnxObj.cnxStr = process.env.CNX_STR_CLOUD || 'mongodb+srv://Silvana:silvana@cluster0.2uwkn.mongodb.net/ort?retryWrites=true&w=majority'
    tipoPersistencia = process.env.TIPO_PERSISTENCIA_CLOUD || 'db'
} else {
    tipoPersistencia = process.env.TIPO_PERSISTENCIA_DEV || 'memoria'
}



const config = {
    getMail: () => user,
    getPass: () => pass,
    getServerPort: () => serverPort,
    getTipoPers: () => tipoPersistencia,
    getCnxObj: () => Object.freeze(cnxObj)

}

module.exports = Object.freeze(config)
