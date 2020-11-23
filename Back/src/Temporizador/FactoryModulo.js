const { crearProgramadordeTareas } = require('../Temporizador/ModuloRecordatorio')
const { crearTareasDaoMemoria } = require('../daoTareas/TareasDaoMemoria')
const mailRecordatorio = require ('../HistoriaUsuario/FactoryCU')


const daoTareas = crearTareasDaoMemoria()
const aviso = mailRecordatorio.getCUEnviarMail()
const ModuloEnviarMail = crearProgramadordeTareas(daoTareas, aviso.enviar)


const recordatorioAgendado ={
        getModuloEnviarMail: () =>{
            return ModuloEnviarMail
        }
} 

module.exports = recordatorioAgendado
