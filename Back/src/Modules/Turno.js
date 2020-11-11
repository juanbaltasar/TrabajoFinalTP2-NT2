require('dotenv').config({
    path: __dirname + '/../../config.env'
});

//const {EnviadorDeMails} = require('./EmailSender.js')
const { v4: uuidv4 } = require('uuid');

// const Enviador = new EnviadorDeMails({
//         service: 'gmail',
//         auth: {
//             user: process.env.MAIL,
//             pass: process.env.PASS
//         }
//     })

class Turno{
    constructor(IdCliente, Fecha, Mail){
        this.Id = uuidv4();
        this.IdCliente = IdCliente;
        this.Fecha = Fecha;
        this.Mail = Mail; //Este campo deberia estar en el usuario
        this.Cancelado=false;
    }

    CancelarTurno(/*A*/){
        if (!this.Cancelado) {
            this.Cancelado = true;
        // try {
        //     Enviador.MandarMail(A, 'Cancelacion de Turno', '', `
        //     <h1>Su turno del ${this.Fecha.getDay()}/${this.Fecha.getMonth()}/${this.Fecha.getFullYear()} ha sido cancelado</h1>`)
        // } catch (error) {
        //     throw new Error(error)
        // }
        }
        else{
            throw new Error('El turno ya fue cancelado previamente')
        }
    }
}

module.exports = Turno