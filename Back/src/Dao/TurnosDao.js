const DataTurnosMemoria = require('../data/DataTurnosMemoria.js')

const dataSource = new DataTurnosMemoria()

class TurnosDao{

    async getById(Id){
        return await dataSource.getById(Id) 
    }

    add(TurnoAAgregar){
        dataSource.add(TurnoAAgregar)
    }
}

module.exports = TurnosDao