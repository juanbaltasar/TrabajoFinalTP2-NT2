const {programarTarea} = require ('./index.js')
const { getDao } = require('./TurnosDaoFactory.js')


async function main (){

    const daoTurnos=await getDao('memoria')
    const tarea= programarTarea()
    const turnosDeManiana=tarea.generarTarea(daoTurnos.getNextDay)
    console.log(turnosDeManiana)
}

main()