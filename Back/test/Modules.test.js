const { doesNotMatch } = require('assert')
const assert = require('assert')

const {MandarMail} = require('../src/Modules/EmailSender.js')

describe('Modulo enviador de mails', function() {

    describe('Si el mail de destino es incorrecto', function()  {
        it('lanza un error', async function() {
            const MailSinArroba = 'holagmail.com'
            const res = await MandarMail(MailSinArroba, 'Hola', 'Hello')
            /*.then((res) => {
                       assert.strictEqual(res.name, 'Error')
                   })*/
            assert.strictEqual(res.name, 'Error')
        })
    })

    describe('Si los datos son correctos', function() {
        it('Envia el mail y devuelve la informacion', async function() {
            this.timeout(5000)
            const MailCorrecto = 'martinjuanbaltasar@gmail.com'
            const res = await MandarMail(MailCorrecto, 'Hola', 'Hello')
            /*.then((res) => {
                            assert.strictEqual(res.response.includes('OK'), true)
                        })*/
            assert.strictEqual(res.response.includes('OK'), true)
        })
    })
})