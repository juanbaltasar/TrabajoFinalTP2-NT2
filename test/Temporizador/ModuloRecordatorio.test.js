const recordatorioAgendado = require ('../../Back/src/Temporizador/FactoryModulo')
// const { crearProgramadordeTareas } = require('../../Back/src/Temporizador/ModuloRecordatorio')
// const { EnviadorDeMails } = require('../../Back/src/Mailer/EmailSender')
// const { crearTurnosDao } = require('../../Back/src/daoTurnos/TurnosDaoFactory')
// const { crearCUEnviarMailALosTurnosDeManiana } = require('../../Back/src/HistoriaUsuario/casoDeUso')
// const { crearTareasDaoMemoria } = require('../../Back/src/daoTareas/TareasDaoMemoria')

function main() {

    // const daoTurnos = await crearTurnosDao()
    // const mailer = new EnviadorDeMails({
    //     service: 'gmail',
    //     auth: {
    //        
    
    
    // user: process.env.MAIL,
    //         // pass: process.env.PASS
    //         user: "tpfinaltp2jbm@gmail.com",
    //         pass: "Ward2010"
    //     }
    // })
    const date = {
        hora: 19,
        mins: 6
    }

    // const daoTareas = crearTareasDaoMemoria()
    // const tarea = crearProgramadordeTareas(daoTareas)
    // const aviso = crearCUEnviarMailALosTurnosDeManiana(mailer, daoTurnos)
    // tarea.generarTarea('mailRecordatorio', date, aviso.enviar)
    const modulo= recordatorioAgendado.getModuloEnviarMail()
    modulo.generarTarea('mailRecordatorio', date)
}

main()


