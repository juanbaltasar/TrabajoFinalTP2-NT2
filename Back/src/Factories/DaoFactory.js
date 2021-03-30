const TurnosDaoDb = require('../Dao/TurnosDaoDb.js')
const TurnosDaoMemoria = require('../Dao/TurnosDaoMemoria.js')

const DaoDb = new TurnosDaoDb()
const DaoMemoria = new TurnosDaoMemoria()
class DaoFactory{

    getTurnosDaoDb(){
        return DaoDb
    }

    getTurnosDaoMemoria(){
        return DaoMemoria
    }
}

module.exports = DaoFactory