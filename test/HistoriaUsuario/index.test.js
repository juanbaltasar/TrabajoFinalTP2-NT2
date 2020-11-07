const assert = require('assert')
const {crearCUEnviarMailALosTurnosDeManiana} = require ('../../Back/src/HistoriaUsuario/casoDeUso')
const {EnviadorDeMails} = require ('../../Back/src/Mailer/EmailSender')
const { getDao } = require('../../Back/src/Temporizador/TurnosDaoFactory')
const {programarTarea} = require ('../../Back/src/Temporizador/index')

describe('Caso de Uso', async () => {
  
    const mailer = new EnviadorDeMails({
        service: 'gmail',
        auth: {
            // user: process.env.MAIL,
            // pass: process.env.PASS
            user: "tpfinaltp2jbm@gmail.com",
            pass: "Ward2010"
        }
    })
    const daoTurnos=await getDao('memoria')
    turnos= await daoTurnos.getAll()
    const crearLista= await programarTarea(turnos)


    describe('Si la lista de turnos esta vacia', function()  {
        it('no envia recordatorios', async function() {
            const daoTurnosVacio ={
                getAll:()=>{
                    return []
                }
            }
            try {
                const enviarMailRecordatorio = crearCUEnviarMailALosTurnosDeManiana(crearLista, mailer, daoTurnosVacio)
                const respuesta=enviarMailRecordatorio.enviar()
               
            } catch (error) {
                console.log(error)
            }
        })
    })

    describe('Si la lista tiene turnos', function()  {
        it('envia los recordatorios', async function() {
        
            try {
                const enviarMailRecordatorio = crearCUEnviarMailALosTurnosDeManiana(crearLista, mailer, daoTurnos)
                enviarMailRecordatorio.enviar()
            } catch (error) {
                console.log(error)
            }
        })
    })
})
