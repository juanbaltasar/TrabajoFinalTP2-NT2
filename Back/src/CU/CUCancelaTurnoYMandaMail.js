const Turno = require("../Modules/Turno");

class CUCancelaTurnoYMandaMail {
    constructor(TurnosDao, Mailer){
        this.TurnosDao = TurnosDao;
        this.Mailer = Mailer;
    }

    async invocar (Id) {
        const TurnoACancelar = await this.TurnosDao.getById(Id)
        try {
            TurnoACancelar.CancelarTurno()
            await this.Mailer.MandarMail(TurnoACancelar.Mail, 'Cancelacion de Turno', '', `
        <h1>Su turno del ${TurnoACancelar.Fecha.getDate()}/${TurnoACancelar.Fecha.getMonth()}/${TurnoACancelar.Fecha.getFullYear()} ha sido cancelado</h1>`)
        } catch (error) {
            throw new Error(error)
        }
        return TurnoACancelar;
    }
}

module.exports = CUCancelaTurnoYMandaMail