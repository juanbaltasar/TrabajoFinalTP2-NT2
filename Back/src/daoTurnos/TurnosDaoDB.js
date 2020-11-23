const {MongoClient} = require ('mongodb')
 

async function crearTurnosDaoDB({ cnxStr, dbName, collectionName }) {

    const client = new MongoClient(cnxStr, { useUnifiedTopology: true })

    try {
        console.log('conectandose a mongodb...')
        await client.connect()
        console.log('...conectado!')
    } catch (error) {
        throw error.message
    }

    const db = client.db(dbName)
    const collection = db.collection(collectionName)


    return {
        getAll: async () => { 
            const turnos = await collection.find({}, {projection: { _id:0}}).toArray()
            return turnos
        },
        add: async (turno) => { 
            const resultado = await collection.insertOne(turno)
            delete turno._id 
        },
        // getByDni: async (dni) => {
        //     return turnos.filter(e => e.dni === dni)
        // },
        getNextDay: async ()=> {

            let i = 0
            const hoy = new Date()
            const dia = hoy.getDate() +1 
            const mes = hoy.getMonth() +1
            const turnosFiltrados = []
            const turnos = await collection.find({}, {projection: { _id:0}}).toArray()


            while (i < turnos.length) {
                if (dia == turnos[i].fecha.dia && mes == turnos[i].fecha.mes) {
                    turnosFiltrados.push(turnos[i])


                }
                i++
        }
            return turnosFiltrados
        },
        close: async() =>{
            await client.close()
        }
    }
}
module.exports={crearTurnosDaoDB}
