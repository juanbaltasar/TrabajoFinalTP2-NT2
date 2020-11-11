const Turno = require('./Modules/Turno.js')
const { v4: uuidv4 } = require('uuid');
const { CUCancelaTurnoYMandaMail } = require('./CU/CUCancelaTurnoYMandaMail.js')
//const {EnviadorDeMails} = require('./Modules/EmailSender.js')
const MailerFactory = require('./Factories/mailerFactory.JS')

// const Enviador = new EnviadorDeMails({ //Pre - Factory
//     service: 'gmail',
//     auth: {
//         user: process.env.MAIL,
//         pass: process.env.PASS
//     }
// })

const Enviador = new MailerFactory().getMailer();

function main() {
    //Creo el turno a cancelar
    const TurnoACancelar = new Turno(uuidv4(), new Date(), 'martinjuanbaltasar@gmail.com');
    
    //Llamo a la funcion del CU cancelar turno y le paso como parametro el turno a cancelar. Luego llamo a la funcion invocar de cancelar turno para que se cancele el turno, cuando finaliza logueo el turno cancelado
    new CUCancelaTurnoYMandaMail(TurnoACancelar, Enviador).invocar().then((res) => console.log(res));
}

main()