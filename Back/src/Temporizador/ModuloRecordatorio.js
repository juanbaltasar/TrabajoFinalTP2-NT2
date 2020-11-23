const schedule = require('node-schedule')

function crearProgramadordeTareas(daoTareas, funcion) {
    const tarea = {
        generarTarea: (name, date) => {
            const rule = new schedule.RecurrenceRule()
            rule.hour = date.hora
            rule.minute = date.mins

            const tareaAgendada = schedule.scheduleJob(name, rule, () => {
                funcion()
            })
            daoTareas.add(tareaAgendada)
            return tareaAgendada.name
        },
        cancelarTarea:(taskID)=>{
            task=daoTareas.getById(taskID)
            task.cancel()
        },
    }
    return tarea
}


module.exports = { crearProgramadordeTareas }

