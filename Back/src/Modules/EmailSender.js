require('dotenv').config({
    path: __dirname + '/../../config.env'
});

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.mail,
        pass: process.env.pass
    }
});

function MandarMail(A, Asunto = 'Sin Asunto', Texto = '', Html = '') {
    let OpcionesMail
    if (Texto != '') {
        OpcionesMail = {
            from: process.env.mail,
            to: A,
            subject: Asunto,
            text: Texto
        };
    } else {
        OpcionesMail = {
            from: process.env.mail,
            to: A,
            subject: Asunto,
            html: Html
        };
    }

    transporter.sendMail(OpcionesMail/*, (error, info) => {
        if (error) {
            console.log(error);
            return error;
        } else {
            console.log(info);
            return info;
        }
    }*/).then((ok) => ok).catch((error) => error)
}

//console.log(process.env.pass, process.env.mail)
//MandarMail("martinjuanbaltasargmail.com", "Hola", "", "");

exports.MandarMail = MandarMail;