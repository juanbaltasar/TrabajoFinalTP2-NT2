const express = require('express')
const app = express()
const port = 3000

//Pasar al factory de CU
// const TurnosDao = require('./Dao/TurnosDaoDb.js')
// const DaoTurnos = new TurnosDao()

const DaoFactoryClass = require('./Factories/DaoFactory.js')

const CUCancelaTurnoYMandaMailFactory = require('./Factories/CUCancelaTurnoYMandaMailFactory.js')

app.use(express.json())
//app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Listening')
})
app.delete('/api/turnos/CancelaTurnoYMandaMail', async (req, res) => {
    //Inserto un turno ficticio - como regla general, no hacer new en ningun lado que no sea factory
    try {
        const result = await new CUCancelaTurnoYMandaMailFactory().getCUCancelaTurnoYMandaMail().invocar(req.body.IdTurno)
        //console.log(result)
        res.send(result)
    } catch (error) {
        if(error.type === 'NOT_FOUND'){
            res.status(404).send('El Turno no fue encontrado');
        }
        else if (error.type === 'SERVER_ERROR') {
            res.status(500).send('El Turno fue cancelado, pero hubo un error al enviar el mail');
        }
    }
})

app.listen(port, () => {
    //DaoTurnos.connect()
    new DaoFactoryClass().getTurnosDaoDb().connect()
    console.log(`App listening for requests on http://localhost:${port}`)
})