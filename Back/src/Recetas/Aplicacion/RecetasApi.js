const { crearErrorArgumentosInvalidos } = require('../../../Compartido/ApiError.js')
const { crearReceta } = require('../Modelo/Receta.js')

function crearRecetasApi(recetasDao) {
    return {
        getByDni: async (dato) => {
            const dniValido = crearDniValido(dato)
            const recetas = await recetasDao.getByDni(dniValido)
            return recetas
        },
        getAll: async () => {
            recetas = await recetasDao.getAll()
            return recetas
        },
        create: async (datos) => {
            const receta = crearReceta(datos)
            await recetasDao.addUnique(receta, 'dni')
            return receta
        },
        deleteById: async (dato) => {
            const idNumerico = crearIdValido(dato)
            await recetasDao.deleteById(idNumerico)
        },
        replaceById: async (datos, unId) => {
            if (!datos.id || !unId || datos.id != unId) {
                throw crearErrorArgumentosInvalidos('no coinciden los ids')
            }
            const receta = crearReceta(datos)
            await recetasDao.updateById(receta)
            return receta
        }
    }
}

function crearDniValido(dato) {
    if (isNaN(dato)) {
        throw crearErrorArgumentosInvalidos('el dni del estudiante debe ser numerico')
    }
    return dato
}

function crearRangoValido(obj) {
    const rango = {
        desde: parseInt(obj.desde),
        hasta: parseInt(obj.hasta)
    }

    if (isNaN(rango.desde) || isNaN(rango.hasta)) {
        throw crearErrorArgumentosInvalidos('el rango de edades debe ser numerico')
    }

    return rango
}

function crearIdValido(dato) {
    const idNumerico = parseInt(dato)
    if (isNaN(idNumerico)) {
        throw crearErrorArgumentosInvalidos('el id del estudiante debe ser numerico')
    }
    return idNumerico
}

module.exports = { crearRecetasApi }