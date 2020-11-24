function crearRecetasDaoMemoria() {
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
        getByDni: async (dni) => {
            return elementos.find(e => e.dni === dni)
        }
    }
}

module.exports = { crearRecetasDaoMemoria }