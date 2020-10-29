const cron = require ('node-cron')
//const whatsappEmail = require ('../src/WhatsappEmail/WhatsAppEmail.js')
const fs = require  ('fs')

function crearListaParaNotificar(turnos){

    let i = 0
    let hoy = new Date()
    let dia = hoy.getDate() -1 
    let mes = hoy.getMonth() +1

    const personasANotificar = []

    while (i < turnos.length) {
        if (dia == turnos[i].fecha.dia && mes == turnos[i].fecha.mes) {
        personasANotificar.push(turnos[i])
        console.log('turno se agrega a la lista...')
        }
        i++
    }
    return personasANotificar
}


function enviarNotificacion (notificaciones){
    for (const notificacion of notificaciones){
    //whatsappEmail.MandarMail(notificacion)
    console.log('Se envio mail correctamente') 
    }
}



async function buscarTurnosDeMañana(turnos){
    //cron.schedule('* * * * *', async () => {
    console.log('9AM_ Se buscan los turnos con fecha de mañana');
    const notificaciones= await crearListaParaNotificar(turnos)
        if (notificaciones.length > 0){
            enviarNotificacion(notificaciones)
        }else{
            throw new Error ('No hay turnos')
        } 
// },{   
//     scheduled: true,
//     timezone: "America/Argentina/Buenos_Aires"
// })
}    

function suscribirParaRecordatorio(turnos, turno){
    turnos.push(turno)
    return turnos
}


function desuscribirRecordatorio(turnos, turno){
let i= 0
let encontre= false   
    while(i<turnos.length && !encontre){ 
        if(turnos[i].dni==turno.dni){
            turnos.splice(i,1)
            encontre= true
        }
        i++
    }
    return turnos
}



module.exports = {buscarTurnosDeMañana, suscribirParaRecordatorio, desuscribirRecordatorio}