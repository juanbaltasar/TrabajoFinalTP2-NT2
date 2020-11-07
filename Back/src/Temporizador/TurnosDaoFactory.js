const { crearTurnosDaoMemoria } = require ("./TurnosDaoMemoria.js")
const {crearDaoBD} = require ("./TurnosDaoDB.js")

function getDao(tipo){
    if (tipo === 'memoria') return crearTurnosDaoMemoria()
    if (tipo === 'bd') return crearDaoDB()
    throw new Error ('Persistencia no valida')
}

module.exports={getDao}