async function crearRecetasDaoMemoria() {
    const elementos = [{
        id: 1,
        dni: 123,
        receta: 'pedro.pdf'
    }, {
        id: 2,
        dni: 321,
        receta: 'juan.pdf'
    }]

    return {
        add: async (elemento) => {
            elementos.push(elemento)
        },
        getByDni: async (dni) => {
            return elementos.filter(e => e.dni === dni)
        },
        getAll: async () => {
            return [...elementos]
        },
        deleteById: async (unId) => {
            const indiceParaBorrar = elementos.findIndex(e => e.id == unId)
            if (indiceParaBorrar === -1) {
                throw crearErrorRecursoNoEncontrado('receta', unId)
            }
            elementos.splice(indiceParaBorrar, 1)
        },
        updateById: async (receta) => {
            const indiceParaReemplazar = elementos.findIndex(e => e.id == receta.id)
            if (indiceParaReemplazar === -1) {
                throw crearErrorRecursoNoEncontrado('receta', receta.id)
            }
            elementos.splice(indiceParaReemplazar, 1, receta)
        },
        deleteAll: async () => {
            while (elementos.length > 0) {
                elementos.pop()
            }
        },
        close: async () => { }
    }
}

module.exports = { crearRecetasDaoMemoria }