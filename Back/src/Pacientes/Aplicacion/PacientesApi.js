const { crearErrorArgumentosInvalidos } = require('../../../Compartido/ApiError.js')
const { crearPaciente } = require('../Modelo/Paciente.js')

function crearPacientesApi(pacientesDao) {
    return {
        getByDni: async (dato) => {
            const dniValido = crearDniValido(dato)
            const pacientes = await pacientesDao.getByDni(dniValido)
            return pacientes
        },
        getById: async (dato) => {
            const dniValido = crearIdValido(dato)
            const pacientes = await pacientesDao.getById(dniValido)
            return pacientes
        },
        getAll: async () => {
            pacientes = await pacientesDao.getAll()
            return pacientes
        },
        create: async (datos) => {
            const paciente = crearPaciente(datos)
            await pacientesDao.addUnique(paciente, 'dni')
            return paciente
        },
        deleteById: async (dato) => {
            const idNumerico = crearIdValido(dato)
            await pacientesDao.deleteById(idNumerico)
        },
        replaceById: async (datos, unId) => {
            if (!datos.id || !unId || datos.id != unId) {
                throw crearErrorArgumentosInvalidos('no coinciden los ids')
            }
            const paciente = crearPaciente(datos)
            await pacientesDao.updateById(paciente)
            return paciente
        }
    }
}

function crearDniValido(dato) {
    if (isNaN(dato)) {
        throw crearErrorArgumentosInvalidos('el dni del paciente debe ser numerico')
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
        throw crearErrorArgumentosInvalidos('el id del paciente debe ser numerico')
    }
    return idNumerico
}

module.exports = { crearPacientesApi }