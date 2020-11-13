const CUCancelaTurnoYMandaMail = require('../CU/CUCancelaTurnoYMandaMail.js')
//const {EnviadorDeMails} = require('./Modules/EmailSender.js')
const MailerFactory = require('../Factories/mailerFactory.js')

//const Enviador = new MailerFactory().getMailer();

class CUCancelaTurnoYMandaMailFactory{
    constructor(TurnosDao){
        this.TurnosDao = TurnosDao;
        this.Mailer = new MailerFactory().getMailer()
    }
    getCUCancelaTurnoYMandaMail(){
        return (new CUCancelaTurnoYMandaMail(this.TurnosDao, this.Mailer))
    }
}

module.exports = CUCancelaTurnoYMandaMailFactory