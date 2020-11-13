const Turno = require("../Modules/Turno");

const Turnos = [];

class DataTurnosMemoria{

    async getById(Id){
        let TurnoBuscado = null;
        for (const Turno of Turnos) {
            if (Turno.Id === Id) {
                TurnoBuscado = Turno
            }
        }
        return TurnoBuscado
    }

    add(TurnoAAgregar){
        Turnos.push(TurnoAAgregar)
    }
}

module.exports = DataTurnosMemoria