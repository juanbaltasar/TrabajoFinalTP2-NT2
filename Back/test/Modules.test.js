require('dotenv').config({
    path: __dirname + '/../config.env'
});

const { doesNotMatch } = require('assert')
const assert = require('assert')
const { v4: uuidv4 } = require('uuid');
const Turno = require('')

const {EnviadorDeMails} = require('../src/Modules/EmailSender.js')

describe('Modulos', () => {

    describe('Modulo Turnos', () => {
        
    })
    

    describe('Modulo enviador de mails', function() {
    
    const Enviador = new EnviadorDeMails({
        service: 'gmail',
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASS
        }
    })

    describe('Si el mail de destino es incorrecto', function()  {
        it('lanza un error', async function() {
            
            const MailSinArroba = 'holagmail.com'
            try {
                const res = await Enviador.MandarMail(MailSinArroba, 'Hola', 'Hello')
            } catch (error) {
                assert(true)
            }
            //console.log(res.name);
            /*.then((res) => {
                       assert.strictEqual(res.name, 'Error')
                   })*/
            
        })
    })

    describe('Si los datos son correctos, al enviar texto', function() {
        it('Envia el mail y devuelve la informacion', async function() {
            this.timeout(5000)
            const MailCorrecto = 'martinjuanbaltasar@gmail.com'
            let res
            try {
                res = await Enviador.MandarMail(MailCorrecto, 'Hola', 'Hello')
            } catch (error) {

            }
            /*.then((res) => {
                            assert.strictEqual(res.response.includes('OK'), true)
                        })*/
            assert.strictEqual(res.response.includes('OK'), true)
        })
    })

    describe('Si los datos son correctos, al enviar html', function() {
        it('Envia el mail y devuelve la informacion', async function() {
            this.timeout(5000)
            const MailCorrecto = 'martinjuanbaltasar@gmail.com'
            let res
            try {
                res = await Enviador.MandarMail(MailCorrecto, 'Hola', '', '<p>Soy un parrafo</p>')
            } catch (error) {
                
            }
            /*.then((res) => {
                            assert.strictEqual(res.response.includes('OK'), true)
                        })*/
            assert.strictEqual(res.response.includes('OK'), true)
        })
    })
})
})
