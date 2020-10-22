const assert = require('assert')
const { enviarRecordatorio } = require('../../src/Modulos/Temporizador.js')

const fechaInvalida = {
    min: 'ss',
    hora: 8,
    dia: 20,
    mes: 10
}


describe('Funcion enviarRecordatorio', () => {
    describe('si recibe fecha invalida', () => {
        it('lanza error', () => {
            try {
                const respuesta = enviarRecordatorio(fechaInvalida)
                console.log('fail:no lanzo error')
            } catch (error) {
                console.log(error)
            }
        })
    })
})


const fechaValida = {
    min: 24,
    hora: 17,
    dia: 20,
    mes: 10
}


describe('Funcion enviarRecordatorio', () => {
    describe('si recibe fecha valida', () => {
        it('muestra la hora en que se completo la tarea', () => {
            try {
                const respuesta = enviarRecordatorio(fechaValida)
                console.log('ok')
            } catch (error) {
                console.log(error)
            }
        })
    })
})