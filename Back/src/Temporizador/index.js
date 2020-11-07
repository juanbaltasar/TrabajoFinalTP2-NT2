const cron = require ('node-cron')

function programarTarea(){
    let t=0
    const tarea={
        generarTarea: (funcion)=>{   
            cron.schedule('* * * * * *', () => {
                return funcion()
            },{   
                scheduled: true,
                timezone: "America/Argentina/Buenos_Aires"
            })
        }
    }   

    return tarea
}


module.exports = {programarTarea}