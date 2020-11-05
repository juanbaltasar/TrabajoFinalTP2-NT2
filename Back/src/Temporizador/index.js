const cron = require ('node-cron')
const fs = require  ('fs')

function temporizadorDeNotificaciones(turnos){
    
    cron.schedule('* * * * * *', () => {
        crearListaParaNotificar.crear(turnos)
     },{   
         scheduled: true,
         timezone: "America/Argentina/Buenos_Aires"
     })
    
    const crearListaParaNotificar={
        crear:(turnos)=> {

            let i = 0
            let hoy = new Date()
            let dia = hoy.getDate() +1 
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
    }
    return crearListaParaNotificar
}

// suscribirParaRecordatorio: (turnos, turno)=>{
//     turnos.push(turno)
//     return turnos
// }


// desuscribirRecordatorio:(turnos, turno)=>{
// let i= 0
// let encontre= false   
//     while(i<turnos.length && !encontre){ 
//         if(turnos[i].dni==turno.dni){
//             turnos.splice(i,1)
//             encontre= true
//         }
//         i++
//     }
//     return turnos
// }


module.exports = {temporizadorDeNotificaciones}