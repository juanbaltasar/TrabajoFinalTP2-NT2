require('dotenv').config(/*{
    path: __dirname + '/../../config.env'
}*/);

const EnviadorDeMails = require('../Modules/EmailSender.js')

const Enviador = new EnviadorDeMails({
    service: 'gmail',
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASS
    }
})

class MailerFactory{
     getMailer() {
        return Enviador
    }
}

module.exports = MailerFactory