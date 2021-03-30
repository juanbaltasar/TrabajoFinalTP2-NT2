const nodemailer = require('nodemailer');

const { crearErrorDeUsuario, crearErrorDelServidor, crearErrorNoEncontrado } = require('../ErrorApi.js')

class EnviadorDeMails{
    constructor(configuracion){
        this.configuracion = configuracion
        this.transporter = nodemailer.createTransport(configuracion);
    }

    async MandarMail(A, Asunto = 'Sin Asunto', Texto = '', Html = '', adjuntos=[]) { //El nyc me marca que esta linea no es cubierta por los tests, supongo que por los parametros default
        let OpcionesMail;
        if (Texto != '') {
            OpcionesMail = {
                from: this.configuracion.auth.user,
                to: A,
                subject: Asunto,
                text: Texto,
                attachments:adjuntos
            };
        } else {
            OpcionesMail = {
                from: this.configuracion.auth.user,
                to: A,
                subject: Asunto,
                html: Html,
                attachments:adjuntos
            };
        }
    
        let retorno;
        //retorno = await this.transporter.sendMail(OpcionesMail).catch((err) => err); //Cambiar por try - catch
        try {
            retorno = await this.transporter.sendMail(OpcionesMail);
        } catch (error) {
            throw crearErrorDelServidor(error);
        }
        return retorno;
    }
}

module.exports = EnviadorDeMails


// require('dotenv').config({
//     path: __dirname + '/../../config.env'
// });

// const nodemailer = require('nodemailer');

// //Terminar de desacoplar mediante una funcion constructora o una clase
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.MAIL,
//         pass: process.env.PASS
//     }
// });

// async function MandarMail(A, Asunto = 'Sin Asunto', Texto = '', Html = '') {
//     let OpcionesMail
//     if (Texto != '') {
//         OpcionesMail = {
//             from: process.env.MAIL,
//             to: A,
//             subject: Asunto,
//             text: Texto
//         };
//     } else {
//         OpcionesMail = {
//             from: process.env.MAIL,
//             to: A,
//             subject: Asunto,
//             html: Html
//         };
//     }

//     let retorno;
    
//     try {
//         retorno = await transporter.sendMail(OpcionesMail);
//     } catch (error) {
//         throw new Error('Error in sending the mail')
//     }//.catch((err) => err.name) //cambiar por un try - catch
//     return retorno;
// }

// exports.MandarMail = MandarMail;


/*, (error, info) => {
        if (error) {
            //console.log(error);
            //return error;
            retorno = error;
        } else {
            //console.log(info);
            //return info;
            retorno = info;
        }
    }*/

/*.then((res) => {retorno = res})*/