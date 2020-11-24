const { MongoClient } = require('mongodb')
const config = require('../config/config.js')
const { crearErrorArgumentosInvalidos, crearErrorDeBaseDeDatos
} = require('../../Compartido/ApiError.js')

async function crearPacientesDaoDb({ cnxStr, dbName, collectionPacientes }) {

    //console.log (cnxStr)
    //console.log (dbName)
    //console.log (collectionPacientes)

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
            const turnos = registros.map(reg => crearTurno(reg))
            return turnos
        },
        getById: async (unId) => {
            const registros = await collection.find({ id: unId }).toArray()
            const turnos = registros.map(reg => crearTurno(reg))
            return turnos
        },
        getByFechaHora: async (unaFechaHora) => {
            const registros = await collection.find({ fechaHoraTurno: unaFechaHora }).toArray()
            const turnos = registros.map(reg => crearTurno(reg))
            return turnos
        },
        addAll: async (elements) => {
            await collection.insertMany(elements)
            for (const e of elements) {
                delete e._id
            }
        },
        add: async (element) => {
            const turno = crearTurno(element)
            await collection.insertOne(turno)
            return turno
        },
        addUnique: async (elemento, campo) => {
            const query = {}
            query[campo] = elemento[campo]

            const result = await collection.updateOne(
                query,
                { $setOnInsert: elemento },
                {
                    upsert: true,
                    returnOriginal: false
                }
            )

            if (result.matchedCount > 0) {
                throw crearErrorArgumentosInvalidos('Campo unico no respetado')
            }

            delete elemento._id
            return elemento
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