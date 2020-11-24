function crearPacientesDaoMemoria() {
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
        getByDni: async (dni) => {
            return elementos.find(e => e.dni === dni)
        },
        getById: async (id) => {
            return elementos.find(e => e.id === id)
        }
    }
}

module.exports = { crearPacientesDaoMemoria }