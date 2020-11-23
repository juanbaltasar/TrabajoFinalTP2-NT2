
function crearCUEnviarMailALosTurnosDeManiana(mailer, daoTurnos){
    const CU={
        enviar:async()=>{
            const turnosDeManiana= await daoTurnos.getNextDay()
            turnosDeManiana.forEach(element => {
                mailer.MandarMail( 'silmaesquivel@gmail.com', 'Recordatorio', `Hola ${element.nombre} mañana tenes turno`)
            })   
        }
    }
    return CU
}
module.exports={crearCUEnviarMailALosTurnosDeManiana}
