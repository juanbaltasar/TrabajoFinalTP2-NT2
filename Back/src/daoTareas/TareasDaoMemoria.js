
function crearTareasDaoMemoria() {
    const tareas = [ ]

      return {
        add: async (tarea) => { tareas.push(tarea) },
        getAll: async () => { return [...tareas] },
        getById: async (id) => {
            return tareas.find(e => e.id === id)
        },
    }
}
module.exports={crearTareasDaoMemoria}
