const assert = require('assert')
const axios = require('axios')
const {crearServidor} = require ('../Back/src/Servidor/Server')
const { crearTurnosDao } = require("../Back/src/daoTurnos/TurnosDaoFactory")
const { crearCliente } = require("../test/ClienteRest")

const turno = {
    nombre: "lisa",
    apellido: "fernandez",
    dni:123,
    mail: "lisa@getmail.com",
    fecha: {
        hora:10,
        dia:20,
        mes:11
    }
  }
const turno2 = {
    nombre: "manuel",
    apellido: "hernandez",
    dni:456,
    mail: "manuel@getmail.com",
    fecha: {
        hora:10,
        dia:21,
        mes:11
    }
  }

describe('getAll', () => {
    let db
    let cliente
    let server

    before(async()=>{
        db = await crearTurnosDao()
        server = await crearServidor(0, db)
        cliente = crearCliente('http://localhost',server.address().port,'/api/recordatorio')
    })

    after(()=>{
        server.close()
    })

    describe('si el puerto esta ocupado', () => {
        it('no se conecta y lanza error', async () => {
            await assert.rejects(async () =>{
                await crearServidor(server.address().port)
        }, (error)=>{
            assert.strictEqual(error.message, 'error al conectarse al servidor')
            return true
            })
        })
    })

    describe('si hay turnos', () => {
        it('devuelve una coleccion con todos los turnos', async () => {
            await db.add(turno)
            await db.add(turno2)

            const turnos = await cliente.getAll() 
            console.log(turnos)
            const esperados = [turno, turno2]
            assert.deepStrictEqual (turnos, esperados)
        })
    })
})


