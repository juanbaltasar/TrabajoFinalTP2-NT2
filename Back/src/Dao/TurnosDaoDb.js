const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'
const { crearErrorDeUsuario, crearErrorDelServidor, crearErrorNoEncontrado } = require('../ErrorApi.js')

//Implementar un repo o mapper el cual rehidrate los DTO a BO

class TurnosDaoDb{
    constructor(){
        this.client = new MongoClient(url, {useUnifiedTopology:true})
    }

    async getById(IdBuscado) {
        //console.log('Entra al getById')
        const db = this.client.db('trabajo-final-tp2')
        const collection = db.collection('turnos')

        //console.log('antes de buscar')
        
        const arr = await collection.find({ Id:IdBuscado }).limit(1).toArray()

        //console.log(arr.length)
        
        if (arr.length > 0) {
            const TurnoBuscado = arr[0]

            //console.log(TurnoBuscado)

            delete TurnoBuscado._id
        
            return TurnoBuscado
        } else {
            throw new crearErrorNoEncontrado('Turno not found')
        }
    }

    async getAll() {
        const db = this.client.db('trabajo-final-tp2')
        const collection = db.collection('turnos')
        
        const arr = await collection.find().toArray()
        
        const TurnosBuscados = arr[0]

        TurnosBuscados.forEach(Turno => {
            delete Turno._id
        });

        console.log(TurnoBuscado)
        
        return TurnoBuscado
    }

    async add(TurnoAAgregar) {
        const db = this.client.db('trabajo-final-tp2')
        const collection = db.collection('turnos')
        const result = await collection.insertOne(TurnoAAgregar)
        delete TurnoAAgregar._id
        return TurnoAAgregar
    }

    async update (TurnoAModificar) {
        const db = this.client.db('trabajo-final-tp2')
        const collection = db.collection('turnos')
        collection.replaceOne(
            {Id: TurnoAModificar.Id},
            { Turno: TurnoAModificar }
            )
    }

    async connect() {
        await this.client.connect()
        
    }

    async close() {
        await this.client.close()
    }
}

module.exports = TurnosDaoDb

/*MongoClient.connect(url, function(err, client){
    const db = client.db('trabajo-final-tp2')
    
})*/