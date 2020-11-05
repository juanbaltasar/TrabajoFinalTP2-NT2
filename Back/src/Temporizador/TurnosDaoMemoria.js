function crearDaoMemoria() {
    const turnos = [ {
        nombre: "lisa",
        apellido: "fernandez",
        dni:123,
        mail: "lisa@getmail.com",
        fecha: {
            hora:10,
            dia:6,
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
            dia:6,
            mes:11
        }
      }];
    return {
        getTurnos: async () => { return [...turnos] },
        add: async (turno) => { turnos.push(turno) }
    }
}
module.exports={crearDaoMemoria}
