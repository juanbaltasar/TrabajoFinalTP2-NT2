const EnviadorDeMails = require('EmailSender.js')
const { v4: uuidv4 } = require('uuid');

const Enviador = new EnviadorDeMails({
        service: 'gmail',
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASS
        }
    })

class Turno{
    this.Id='';
    this.IdCliente='';
    this.Fecha='';
    this.Cancelado=false;

    constructor(IdCliente, Fecha){
        this.Id = uuidv4();
        this.IdCliente = IdCliente;
        this.Fecha = Fecha;
    }

    async CancelarTurno(A, Asunto, Texto, Html){
        this.Cancelado = true;
        try {
            Enviador.MandarMail(A, Asunto, Texto, Html)
        } catch (error) {
            throw new Error(error)
        }
    }
}

exports.Turno = Turno