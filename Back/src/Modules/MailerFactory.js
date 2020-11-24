const { EnviadorDeMails } = require('../Modules/EmailSender.js')
const config = require('../Config/config.js')

const mailer = new EnviadorDeMails({

    service: 'gmail',
    auth: {
        user:  config.getMail(),
        pass:  config.getPass()
    }
})

const MailerFactory = {
    getMailer: () => {
        return mailer
    }
}

module.exports = { MailerFactory }