require('dotenv').config({
    path: __dirname + '/../../config.env'
});

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASS
    }
});

async function MandarMail(A, Asunto = 'Sin Asunto', Texto = '', Html = '') {
        let OpcionesMail
        if (Texto != '') {
            OpcionesMail = {
                from: process.env.MAIL,
                to: A,
                subject: Asunto,
                text: Texto
            };
        } else {
            OpcionesMail = {
                from: process.env.MAIL,
                to: A,
                subject: Asunto,
                html: Html
            };
        }

        let retorno;

        retorno = await transporter.sendMail(OpcionesMail/*, (error, info) => {
                if (error) {
                    //console.log(error);
                    //return error;
                    retorno = error;
                } else {
                    //console.log(info);
                    //return info;
                    retorno = info;
                }
            }*/)/*.then((res) => {retorno = res})*/.catch((err) => err)

            return retorno;
            //console.log('no retorno')

            //MandarMail("martinjuanbaltasargmail.com", "Hola", "", "");
        }

        exports.MandarMail = MandarMail;