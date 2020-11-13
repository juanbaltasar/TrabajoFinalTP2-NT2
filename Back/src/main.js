const Turno = require('./Modules/Turno.js')
const { v4: uuidv4 } = require('uuid');
const CUCancelaTurnoYMandaMailFactory = require('./Factories/CUCancelaTurnoYMandaMailFactory.js')
const TurnosDao = require('./Dao/TurnosDao.js')


// const Enviador = new EnviadorDeMails({ //Pre - Factory
//     service: 'gmail',
//     auth: {
//         user: process.env.MAIL,
//         pass: process.env.PASS
//     }
// })

function main() {
    //Creo el turno a cancelar
    const TurnoACancelar = new Turno(uuidv4(), new Date(), 'martinjuanbaltasar@gmail.com');

    //Instancio un nuevo dao.
    const DaoTurnos = new TurnosDao();

    //Agrego el turno al medio de persistencia abstraido por el Dao
    DaoTurnos.add(TurnoACancelar)
    
    //Llamo a la funcion del CU cancelar turno y le paso como parametro el turno a cancelar. Luego llamo a la funcion invocar de cancelar turno para que se cancele el turno, cuando finaliza logueo el turno cancelado
    new CUCancelaTurnoYMandaMailFactory(DaoTurnos)
    .getCUCancelaTurnoYMandaMail()
    //Le paso el Id del turno que previamente agregue para que internamente lo busque por un dao propio
    .invocar(TurnoACancelar.Id)
    .then((res) => console.log(res));
}

main()