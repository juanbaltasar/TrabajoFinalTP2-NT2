
function crearCUEnviarMailALosTurnosDeManiana(crearLista, mailer, daoTurnos){
    const CU={
        enviar:async()=>{
        const i=0
            turnos= await daoTurnos.getAll()
            const turnosDeManiana= crearLista.crear(turnos)
            if (i<turnosDeManiana.length){
                turnosDeManiana.forEach(element => {
                mailer.MandarMail(element.mail, 'Recordatorio', `Hola ${element.nombre} mañana tenes turno`)
                });
                console.log('Los recordatorios se enviaron correctamente')
            }
            else {
                console.log('No hay turnos')
            }
        }   
    }
    return CU
}
module.exports={crearCUEnviarMailALosTurnosDeManiana}
