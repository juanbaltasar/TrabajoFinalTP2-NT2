function crearErrorDeUsuario(msg) {
    const errObj = new Error(msg)
    errObj.type = 'USER_ERROR'
    return errObj
}

function crearErrorDelServidor(msg) {
    const errObj = new Error(msg)
    errObj.type = 'SERVER_ERROR'
    return errObj
}

function crearErrorNoEncontrado(msg) {
    const errObj = new Error(msg)
    errObj.type = 'NOT_FOUND'
    return errObj
}

module.exports = { crearErrorDeUsuario, crearErrorDelServidor, crearErrorNoEncontrado }