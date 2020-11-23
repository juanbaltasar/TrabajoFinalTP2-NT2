const mailRecordatorio = require ('../../Back/src/HistoriaUsuario/FactoryCU') 
// const { crearTurnosDao } = require('../dao/TurnosDaoFactory')
// const {crearCUEnviarMailALosTurnosDeManiana} = require ('./casoDeUso')


async function main (){
    
    // const daoTurnos=await crearTurnosDao()
    // const aviso = crearCUEnviarMailALosTurnosDeManiana(mailer, daoTurnos)
    const aviso = mailRecordatorio.getCUEnviarMail()
    aviso.enviar()
}

main()