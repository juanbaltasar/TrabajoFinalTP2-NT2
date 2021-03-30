const Turno = require("../Modules/Turno");
const { crearErrorDeUsuario, crearErrorDelServidor, crearErrorNoEncontrado } = require('../ErrorApi.js')

class CUCancelaTurnoYMandaMail {
    constructor(TurnosDao, Mailer){
        this.TurnosDao = TurnosDao;
        this.Mailer = Mailer;
    }

    async invocar (Id) {
        //console.log('Entra al invocar')
        let TurnoACancelar;
        try {
            //si lo saco de aca me da un error, aun conectandolo en la instanciacion del servidor
            this.TurnosDao.connect()
            //console.log('Entra al try')
            const DatosTurnoACancelar = await this.TurnosDao.getById(Id)
            //console.log(DatosTurnoACancelar)
            TurnoACancelar= new Turno(DatosTurnoACancelar.IdCliente, DatosTurnoACancelar.Fecha, DatosTurnoACancelar.Mail, DatosTurnoACancelar.Id, DatosTurnoACancelar.Cancelado)
            //console.log(TurnoACancelar)
            TurnoACancelar.CancelarTurno()
            await this.Mailer.MandarMail(TurnoACancelar.Mail, 'Cancelacion de Turno', '', `
        <h1>Su turno del ${TurnoACancelar.Fecha.getDate()}/${TurnoACancelar.Fecha.getMonth()}/${TurnoACancelar.Fecha.getFullYear()} ha sido cancelado</h1>`)
            //volver a guardar el turno cancelado
            this.TurnosDao.update(TurnoACancelar)
        } catch (error) {
            if(error.type === 'NOT_FOUND'){
                throw crearErrorNoEncontrado(error);
            }
            else if (error.type === 'SERVER_ERROR') {
                throw crearErrorDelServidor(error);
            }
            else if(error.type === 'USER_ERROR'){
                throw crearErrorDeUsuario(error)
            }
        }
        return TurnoACancelar;
    }
}

module.exports = CUCancelaTurnoYMandaMail