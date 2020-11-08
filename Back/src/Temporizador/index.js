const cron = require ('node-cron')

function programarTarea(){
    const tarea={
        generarTarea: (mailer, funcion)=>{   
            cron.schedule('* * * * * *', async () => {
                const i=0
                const lista = await funcion()
                lista.forEach(element => {
                    mailer.MandarMail(element.mail, 'Recordatorio', `Hola ${element.nombre} mañana tenes turno`)
               })
            },{   
                scheduled: true,
                timezone: "America/Argentina/Buenos_Aires"
            })
        }
       
    }
    return tarea
}


module.exports = {programarTarea}


