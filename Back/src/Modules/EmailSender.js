const nodemailer = require('nodemailer');

class EnviadorDeMails {
    constructor(configuracion) {
        this.configuracion = configuracion
        this.transporter = nodemailer.createTransport(configuracion);
    }

    async MandarMail(A, Asunto = 'Sin Asunto', Texto = '', Html = '') { //El nyc me marca que esta linea no es cubierta por los tests, supongo que por los parametros default
        let OpcionesMail;
        if (Texto != '') {
            OpcionesMail = {
                from: this.configuracion.auth.user,
                to: A,
                subject: Asunto,
                text: Texto
            };
        } else {
            OpcionesMail = {
                from: this.configuracion.auth.user,
                to: A,
                subject: Asunto,
                html: Html
            };
        }

        let retorno;
        //retorno = await this.transporter.sendMail(OpcionesMail).catch((err) => err); //Cambiar por try - catch
        try {
            retorno = await this.transporter.sendMail(OpcionesMail);
        } catch (error) {
            throw new Error('Error in sending the mail')
        }
        return retorno;
    }
}

module.exports = { EnviadorDeMails }