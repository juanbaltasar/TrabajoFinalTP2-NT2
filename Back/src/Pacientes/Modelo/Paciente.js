const { crearErrorArgumentosInvalidos } = require('../../../Compartido/ApiError.js')

let nextId = 1

function crearPaciente(objeto) {

    const pac = {}

    if (!objeto.id) {
        pac.id = nextId++
    } else {
        pac.id = objeto.id
    }

    if (!objeto.nombre) {
        throw crearErrorArgumentosInvalidos('nombre', 'campo requerido')
    } else {
        pac.nombre = objeto.nombre
    }

    if (!objeto.apellido) {
        throw crearErrorArgumentosInvalidos('apellido', 'campo requerido')
    } else {
        pac.apellido = objeto.apellido
    }

    if (!objeto.dni) {
        throw crearErrorArgumentosInvalidos('dni', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.dni))) {
        throw crearErrorArgumentosInvalidos('dni', 'debe contener unicamente caracteres numericos')
    } else {
        pac.dni = objeto.dni
    }

    if (!objeto.mail) {
        throw crearErrorArgumentosInvalidos('mail', 'campo requerido')
    } else {
        pac.mail = objeto.mail
    }
    return pac
}

module.exports = { crearPaciente }