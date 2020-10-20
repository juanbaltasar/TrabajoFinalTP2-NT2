require('dotenv').config({ path: __dirname+'/../../config.env'}); 
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: process.env.mail,
        pass: process.env.pass
    }
});

function MandarMail(A, Asunto, Texto){
    let OpcionesMail = {
        from:process.env.mail,
        to:A,
        subject:Asunto,
        text:Texto
    };

    transporter.sendMail(OpcionesMail, (error, info) => {
        if (error) {
            console.log(error);
        }
        else{
            console.log(info.response);
        }
    })
}

//console.log(process.env.pass, process.env.mail)
MandarMail("martinjuanbaltasar@gmail.com", "Hola", "nada");