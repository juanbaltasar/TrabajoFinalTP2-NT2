const express = require('express')
const app = express()
const port = 3000
const TurnosDao = require('./Dao/TurnosDao.js')

const CUCancelaTurnoYMandaMailFactory = require('./Factories/CUCancelaTurnoYMandaMailFactory.js')
const CUCancelaTurnoYMandaMail = new CUCancelaTurnoYMandaMailFactory(TurnosDao).getCUCancelaTurnoYMandaMail()

//app.use(bodyParser.urlencoded())
//app.use(bodyParser.json())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Listening')
})
app.patch('/api/UC/CancelaTurnoYMandaMail', (req, res) => {
    console.log(req.body)
    //const result = CUCancelaTurnoYMandaMail.invocar()
    res.send('Recibido')
})

app.listen(port, () => {
    console.log(`App listening for requests on http://localhost:${port}`)
})