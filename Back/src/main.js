const express = require ('express')
const axios = require ('axios')


const app = express()

let miContenedor

app.use(express.json())


app.get('/', (req, res)=>{
    res.json ({contenedor: miContenedor})
})

app.post('/', (req, res)=>{
    miContenedor= req.body
    res.json ()
})

function crearServidor(puerto){
    return new Promise((resolve, reject)=>{
        const server = app.listen(puerto, async ()=>{
            resolve(server)
        })
    })
}

async function main (){
    const server = await crearServidor(0)
    const puertoAsignado = server.address().port
    console.log(`servidor en puerto ${puertoAsignado}`)
    await axios.post(`http://localhost:${puertoAsignado}/`, {nombre:'mariano'})
    const response= await axios.get(`http://localhost:${puertoAsignado}/`)
    console.log(response.data)
    server.close()
}

main()