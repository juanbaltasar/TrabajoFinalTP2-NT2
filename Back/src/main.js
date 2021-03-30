const Turno = require('./Modules/Turno.js')
const { v4: uuidv4 } = require('uuid');
const CUCancelaTurnoYMandaMailFactory = require('./Factories/CUCancelaTurnoYMandaMailFactory.js')
const TurnosDao = require('./Dao/TurnosDaoDb.js')


// const Enviador = new EnviadorDeMails({ //Pre - Factory
//     service: 'gmail',
//     auth: {
//         user: process.env.MAIL,
//         pass: process.env.PASS
//     }
// })

async function main() {
    //Creo el turno a cancelar
    const TurnoACancelar = new Turno(uuidv4(), new Date(), 'martinjuanbaltasar@gmail.com');
    //console.log(TurnoACancelar.CancelarTurno)

    //Instancio un nuevo dao.
    const DaoTurnos = new TurnosDao();

    DaoTurnos.connect()

    //Agrego el turno al medio de persistencia abstraido por el Dao
    await DaoTurnos.add(TurnoACancelar)
    
    //Llamo a la funcion del CU cancelar turno y le paso como parametro el turno a cancelar. Luego llamo a la funcion invocar de cancelar turno para que se cancele el turno, cuando finaliza logueo el turno cancelado
    await new CUCancelaTurnoYMandaMailFactory(DaoTurnos)
    .getCUCancelaTurnoYMandaMail()
    //Le paso el Id del turno que previamente agregue para que internamente lo busque por un dao propio
    .invocar(TurnoACancelar.Id)
    .then((res) => console.log(res));

    //DaoTurnos.close()
}

main()