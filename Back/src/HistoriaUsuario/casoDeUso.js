
function crearCUEnviarMailAlPaciente(dni, mailer, daoTurnos){
    const CU={
        enviar:async()=>{
            paciente= await daoTurnos.getByDni(dni)
            mailer.MandarMail(paciente.mail, 'Verificacion de mail', `Hola ${paciente[0].nombre} este es un mensaje automatico`)
        }   
    }

    return CU
}
module.exports={crearCUEnviarMailAlPaciente}
