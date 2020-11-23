const {EnviadorDeMails} = require ('../Mailer/EmailSender') 
const { crearTurnosDao } = require('../daoTurnos/TurnosDaoFactory')
const {crearCUEnviarMailALosTurnosDeManiana} = require ('../HistoriaUsuario/casoDeUso')
const config = require ('../config/config')

const mailer=  new EnviadorDeMails({
        service: 'gmail',
        auth: {
            user: config.getMail(),
            pass: config.getPass()
        }
    })
const daoTurnos= crearTurnosDao()
const CUEnviarMail = crearCUEnviarMailALosTurnosDeManiana(mailer, daoTurnos)


const mailRecordatorio ={
        getCUEnviarMail: () =>{
            return CUEnviarMail
        }
} 


module.exports = mailRecordatorio
