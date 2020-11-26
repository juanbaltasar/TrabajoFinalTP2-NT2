async function crearPacientesDaoMemoria() {
    const elementos = [{
        id: 1,
        nombre: 'Pedro',
        apellido: 'Test',
        dni: 123,
        mail: 'chiptorr@gmail.com',
    }, {
        id: 2,
        nombre: 'Juan',
        apellido: 'Tset',
        dni: 321,
        mail: 'chiptorr@gmail.com',
    }]

    return {
        add: async (elemento) => {
            elementos.push(elemento)
        },
        getByDni: async (dni) => {
            return elementos.filter(e => e.dni == dni)
        },
        getById: async (id) => {
            return elementos.filter(e => e.id == id)
        },
        getAll: async () => {
            return [...elementos]
        },
        deleteById: async (unId) => {
            const indiceParaBorrar = elementos.findIndex(e => e.id == unId)
            if (indiceParaBorrar === -1) {
                throw crearErrorRecursoNoEncontrado('paciente', unId)
            }
            elementos.splice(indiceParaBorrar, 1)
        },
        updateById: async (paciente) => {
            const indiceParaReemplazar = elementos.findIndex(e => e.id == paciente.id)
            if (indiceParaReemplazar === -1) {
                throw crearErrorRecursoNoEncontrado('paciente', paciente.id)
            }
            elementos.splice(indiceParaReemplazar, 1, paciente)
        },
        deleteAll: async () => {
            while (elementos.length > 0) {
                elementos.pop()
            }
        },
        close: async () => { }
    }
}

module.exports = { crearPacientesDaoMemoria }