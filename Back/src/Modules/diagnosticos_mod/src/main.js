const express = require('express')
const app = express()
const { getDiagnosticos } = require('./diagnosticosModulo.js')

app.get('/', async function (req, res) {
  
  const diagnosticos = await getDiagnosticos()
  //Reviso las propiedades de los objetos traidos
  //console.log(JSON.stringify(diagnosticos)) 
  console.log(diagnosticos.synonym)
  
  // LO MUESTRO EN EL BROWSER:
  res.send(diagnosticos.synonym)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server escuchando en puerto ' + port))
