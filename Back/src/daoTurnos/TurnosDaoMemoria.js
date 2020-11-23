function crearTurnosDaoMemoria() {
    const turnos = [ {
        nombre: "melisa",
        apellido: "fernandez",
        dni:586,
        mail: "melisa@g3tmail.com",
        fecha: {
            hora:10,
            dia:19,
            mes:11
        }
      },
    {
        nombre: "emmanuel",
        apellido: "hernandez",
        dni:478,
        mail: "emmanuel@g3tmail.com",
        fecha: {
            hora:10,
            dia:20,
            mes:11
        }
      }];
    return {
        getAll: async () => { return [...turnos] },
        add: async (turno) => { turnos.push(turno) },
        getByDni: async (dni) => {
            return turnos.filter(e => e.dni === dni)
        },
        getNextDay: async ()=> {

            let i = 0
            const hoy = new Date()
            const dia = hoy.getDate() +1 
            const mes = hoy.getMonth() +1
            const turnosFiltrados = []

            while (i < turnos.length) {
                if (dia == turnos[i].fecha.dia && mes == turnos[i].fecha.mes) {
                    turnosFiltrados.push(turnos[i])


                }
                i++
            }
            return turnosFiltrados
        }
    }
}
module.exports={crearTurnosDaoMemoria}
