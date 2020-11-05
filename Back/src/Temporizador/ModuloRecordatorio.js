const {temporizadorDeNotificaciones} = require ('./index.js')
const { getDao } = require('./TurnosDaoFactory.js')


async function main (){

    const daoTurnos=await getDao('memoria')

    turnos = await daoTurnos.getTurnos()
    const crearLista= await temporizadorDeNotificaciones(turnos)
    const lista=crearLista.crear(turnos)
    console.log(lista)
}

main()