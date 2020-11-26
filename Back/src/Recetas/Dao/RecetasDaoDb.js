const { MongoClient } = require('mongodb')
const { crearReceta } = require('../Modelo/Receta.js')
const config = require('../../Config/config.js')
const { crearErrorDeBaseDeDatos
} = require('../../../Compartido/ApiError.js')

function log(line) {
    if (config.isLogEnabled()) console.log(line)
}

async function crearRecetasDaoDb({ cnxStr, dbName, collectionRecetas }) {

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
    const collection = db.collection(collectionRecetas)

    return {
        getAll: async () => {
            const registros = await collection.find({}).toArray()
            const recetas = registros.map(reg => crearReceta(reg))
            return recetas
        },
        getById: async (unId) => {
            const registros = await collection.find({ id: unId }).toArray()
            const receta = registros.map(reg => crearReceta(reg))
            return receta
        },
        getByDni: async (unDni) => {
            const registros = await collection.find({ dni: unDni }).toArray()
            const receta = registros.map(reg => crearReceta(reg))
            return receta
        },
        add: async (element) => {
            await collection.insertOne(element)
            delete element._id
        },
        deleteById: async (unId) => {
            const { deletedCount } = await collection.deleteOne({ id: unId })
            if (!deletedCount) {
                throw crearErrorRecursoNoEncontrado('receta', unId)
            }
        },
        updateById: async (receta) => {
            const { modifiedCount } = await collection.replaceOne({ id: receta.id }, receta)
            if (modifiedCount === 0) {
                throw crearErrorRecursoNoEncontrado('receta', receta.id)
            }
            delete receta._id
            return receta
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

module.exports = { crearRecetasDaoDb }