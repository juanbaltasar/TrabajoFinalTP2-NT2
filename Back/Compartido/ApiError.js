//Familia de errores para mi aplicación:

function crearErrorDeBaseDeDatos(operacion) {

    const errMsg = 'Error de conexión a la BD.'
    const err = new Error(`${operacion} - ${errMsg}`)
    err.type = 'INTERNAL_ERROR'
    return err
}

function crearErrorArgumentosInvalidos(campo, regla) {

    const errMsg = `${campo}: ${regla}`
    const error = new Error(errMsg)
    error.type = 'INVALID_ARGS'
    return error
}

function crearErrorRecursoNoEncontrado(recurso, id) {
    
    const errMsg = `No se encontró '${recurso}' con ID: ${id}`
    const error = new Error(errMsg)
    error.type = 'NOT_FOUND'
    return error
}

module.exports = {
    crearErrorDeBaseDeDatos,
    crearErrorArgumentosInvalidos,
    crearErrorRecursoNoEncontrado
}