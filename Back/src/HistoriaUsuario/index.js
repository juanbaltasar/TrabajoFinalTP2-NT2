const {EnviadorDeMails} = require ('../Mailer/EmailSender') 
const { getDao } = require('../Temporizador/TurnosDaoFactory')
const {crearCUEnviarMailAlPaciente} = require ('./casoDeUso')


async function main (){
    
    const daoTurnos=await getDao('memoria')
    const dni= 123
    const mailer=  new EnviadorDeMails({
        service: 'gmail',
        auth: {
            // user: process.env.MAIL,
            // pass: process.env.PASS
            user: "tpfinaltp2jbm@gmail.com",
            pass: "Ward2010"
        }
    })

    const aviso = crearCUEnviarMailAlPaciente(dni, mailer, daoTurnos)
    aviso.enviar()
}

main()