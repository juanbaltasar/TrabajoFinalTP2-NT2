const {programarTarea} = require ('../Temporizador/index')
const {EnviadorDeMails} = require ('../Mailer/EmailSender') 
const { getDao } = require('../Temporizador/TurnosDaoFactory')
const {crearCUEnviarMailALosTurnosDeManiana} = require ('./casoDeUso')


async function main (){
    
    const daoTurnos=await getDao('memoria')
    turnos= await daoTurnos.getAll()
    const crearLista= await programarTarea(turnos)
    const mailer=  new EnviadorDeMails({
        service: 'gmail',
        auth: {
            // user: process.env.MAIL,
            // pass: process.env.PASS
            user: "tpfinaltp2jbm@gmail.com",
            pass: "Ward2010"
        }
    })

    const enviarMailRecordatorio = crearCUEnviarMailALosTurnosDeManiana(crearLista, mailer, daoTurnos)
    enviarMailRecordatorio.enviar()
}

main()