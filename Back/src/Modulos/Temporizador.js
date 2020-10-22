const express = require ('express')
const cron = require ('node-cron')
const Taskmanager = require('./Taskmanager')
//const whatsappEmail = require ('../src/Modulos/WhatsAppEmail.js')
//const TaskManager = require ('../src/Modulos/TaskManager.js')
app = express()


let fecha = {
    min: 53,
    hora:19,
    dia: 22,
    mes: 10
}



function enviarRecordatorio(fecha){
    let task=cron.schedule(`${fecha.min +1} ${fecha.hora} ${fecha.dia} ${fecha.mes} *`, () => {
        console.log(`La tarea se completo a las ${fecha.hora} : ${fecha.min +1}`);
    },{
        // whatsappEmail.MandarMail(turno)
        // const id=Taskmanager.add(task) le asigno un ID en caso de necesitar eliminarlo
        // DB.store('task_id', id) lo guardo en una base
        scheduled: true,
        timezone: "America/Argentina/Buenos_Aires"
    }
    )
}


function eliminarRecordatorio(task){
    // const id= DB.get('task_id')
    // const task = Taskmanager.get(id)
    task.destroy()
    console.log('La tarea se elimino')
}

app.listen(8080)


enviarRecordatorio(fecha)

module.exports = {enviarRecordatorio, eliminarRecordatorio}