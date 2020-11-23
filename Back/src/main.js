const axios = require ('axios')
const config = require ('../src/config/config')
const { crearTurnosDao } = require('./daoTurnos/TurnosDaoFactory')
const {crearServidor} = require ('./Servidor/Server')

let server

async function main (){
    aplicacion= await crearTurnosDao()
    server = await crearServidor({port: config.getServerPort(), aplicacion})
    const puertoAsignado = server.address().port
    console.log(`servidor en puerto ${puertoAsignado}`)
    await axios.post(`http://localhost:${puertoAsignado}/api/recordatorio`)
}

process.on('SIGINT', async () => {
    try {
        if (server) {
            server.close()
            console.log('servidor cerrado con exito')
        }
    } catch (error) {
        console.err(error)
    } finally {
        process.exit(0)
    }
})
main()