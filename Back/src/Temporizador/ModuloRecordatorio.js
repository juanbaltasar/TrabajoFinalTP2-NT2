const {programarTarea} = require ('./index.js')
const {EnviadorDeMails} = require ('../Mailer/EmailSender') 
const { getDao } = require('./TurnosDaoFactory.js')


async function main (){

    const daoTurnos=await getDao('memoria')
    const mailer=  new EnviadorDeMails({
        service: 'gmail',
        auth: {
            // user: process.env.MAIL,
            // pass: process.env.PASS
            user: "tpfinaltp2jbm@gmail.com",
            pass: "Ward2010"
        }
    })
    const tarea= programarTarea()
    tarea.generarTarea(mailer, daoTurnos.getNextDay)
}

main()


