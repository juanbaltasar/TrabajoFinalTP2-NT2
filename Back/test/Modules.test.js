const assert = require('assert')
const { type } = require('os')

const {MandarMail} = require('../src/Modules/EmailSender.js')

describe('Modulo enviador de mails', function() {
    describe('Si el mail de destino es incorrecto', function () {
        it('lanza un error', function () {
            const MailSinArroba = 'holagmail.com';
            const result = MandarMail(MailSinArroba, 'Hola', 'Hello')
            console.log(result)
        })
    })
})