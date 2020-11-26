const { crearErrorArgumentosInvalidos } = require('../../../Compartido/ApiError.js')

let nextId = 1

function crearReceta(objeto) {

    const rec = {}

    if (!objeto.id) {
        rec.id = nextId++
    } else {
        rec.id = objeto.id
    }

    if (!objeto.dni) {
        throw crearErrorArgumentosInvalidos('dni', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.dni))) {
        throw crearErrorArgumentosInvalidos('dni', 'debe contener unicamente caracteres numericos')
    } else {
        rec.dni = objeto.dni
    }

    if (!objeto.receta) {
        throw crearErrorArgumentosInvalidos('receta', 'debe contener unicamente caracteres numericos')
    } else {
        rec.receta = objeto.receta
    }
    

    return rec
}

module.exports = { crearReceta }