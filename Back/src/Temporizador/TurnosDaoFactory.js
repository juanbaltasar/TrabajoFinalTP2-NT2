const { crearDaoMemoria } = require ("./TurnosDaoMemoria.js")
const {crearDaoBD} = require ("./TurnosDaoDB.js")

function getDao(tipo){
    if (tipo === 'memoria') return crearDaoMemoria()
    if (tipo === 'bd') return crearDaoDB()
    throw new Error ('Persistencia no valida')
}

module.exports={getDao}