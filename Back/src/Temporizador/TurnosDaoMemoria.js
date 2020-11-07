function crearTurnosDaoMemoria() {
    const turnos = [ {
        nombre: "lisa",
        apellido: "fernandez",
        dni:123,
        mail: "lisa@getmail.com",
        fecha: {
            hora:10,
            dia:7,
            mes:11
        }
      },
    {
        nombre: "manuel",
        apellido: "hernandez",
        dni:456,
        mail: "manuel@getmail.com",
        fecha: {
            hora:10,
            dia:8,
            mes:11
        }
      }];
    return {
        getAll: async () => { return [...turnos] },
        add: async (turno) => { turnos.push(turno) },
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