const { MongoClient } = require('mongodb')
const { crearPaciente } = require('../Modelo/Paciente.js')
const config = require('../../Config/config.js')
const { crearErrorDeBaseDeDatos
} = require('../../../Compartido/ApiError.js')

function log(line) {
    if (config.isLogEnabled()) console.log(line)
}

async function crearPacientesDaoDb({ cnxStr, dbName, collectionPacientes }) {

    const client = new MongoClient(cnxStr, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    try {
        log('Conectandose a mongodb...')
        await client.connect()
        log('...conectado!')
    } catch (error) {
        throw crearErrorDeBaseDeDatos(error.message)
    }

    const db = client.db(dbName)
    const collection = db.collection(collectionPacientes)

    return {
        getAll: async () => {
            const registros = await collection.find({}).toArray()
            const pacientes = registros.map(reg => crearPaciente(reg))
            return pacientes
        },
        getById: async (unId) => {
            const registros = await collection.find({ id: unId }).toArray()
            const paciente = registros.map(reg => crearPaciente(reg))
            return paciente
        },
        add: async (element) => {
            await collection.insertOne(element)
            delete element._id
        },
        deleteById: async (unId) => {
            const { deletedCount } = await collection.deleteOne({ id: unId })
            if (!deletedCount) {
                throw crearErrorRecursoNoEncontrado('paciente', unId)
            }
        },
        updateById: async (paciente) => {
            const { modifiedCount } = await collection.replaceOne({ id: paciente.id }, paciente)
            if (modifiedCount === 0) {
                throw crearErrorRecursoNoEncontrado('paciente', paciente.id)
            }
            delete paciente._id
            return paciente
        },
        deleteAll: async () => {
            return await collection.deleteMany({})
        },

        close: async () => {
            log('Cerrando conexion a mongodb...')
            await client.close()
            log('...Conexion cerrada!')
        }
    }
}

module.exports = { crearPacientesDaoDb }