class CUCancelaTurnoYMandaMail {
    constructor(TurnoACancelar, Mailer){
        this.TurnoACancelar = TurnoACancelar;
        this.Mailer = Mailer;
    }

    async invocar () {
        try {
            this.TurnoACancelar.CancelarTurno()
            await this.Mailer.MandarMail(this.TurnoACancelar.Mail, 'Cancelacion de Turno', '', `
        <h1>Su turno del ${this.TurnoACancelar.Fecha.getDay()}/${this.TurnoACancelar.Fecha.getMonth()}/${this.TurnoACancelar.Fecha.getFullYear()} ha sido cancelado</h1>`)
        } catch (error) {
            throw new Error(error)
        }
        return this.TurnoACancelar;
    }
}

module.exports = CUCancelaTurnoYMandaMail