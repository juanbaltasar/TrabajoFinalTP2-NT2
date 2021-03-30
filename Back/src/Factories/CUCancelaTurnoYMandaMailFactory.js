const CUCancelaTurnoYMandaMail = require('../CU/CUCancelaTurnoYMandaMail.js')
const MailerFactory = require('../Factories/mailerFactory.js')
const DaoFactory = require('../Factories/DaoFactory.js')
const Turno = require('../Modules/Turno.js')

class CUCancelaTurnoYMandaMailFactory{
    constructor(){
        this.TurnosDao = new DaoFactory().getTurnosDaoDb();
        this.Mailer = new MailerFactory().getMailer()
        this.TurnosDao.add(new Turno(1, new Date(), 'martinjuanbaltasar@gmail.com',1))
    }
    getCUCancelaTurnoYMandaMail(){
        return (new CUCancelaTurnoYMandaMail(this.TurnosDao, this.Mailer))
    }
}

module.exports = CUCancelaTurnoYMandaMailFactory