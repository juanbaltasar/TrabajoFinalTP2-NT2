const assert = require('assert')
const axios = require('axios')
const {crearServidor} = require ('../Back/src/Server.js')
const { getDao } = require("../Back/src/Temporizador/TurnosDaoFactory")
const { crearCliente } = require("../Back/src/Temporizador/ClienteRest")

const turno = {
    nombre: "lisa",
    apellido: "fernandez",
    dni:123,
    mail: "lisa@getmail.com",
    fecha: {
        hora:10,
        dia:29,
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
        dia:28,
        mes:11
    }
  }

describe('getTurnos', () => {

    let cliente
    let db
    let server

    beforeEach(async()=>{
        db = getDao('memoria')
        server = await crearServidor(0, db)
        cliente = crearCliente('http://localhost',server.address().port,'/api/turnos')

    })

    afterEach(()=>{
        server.close()
    })

    describe('si el puerto esta ocupado', () => {
        it('no se conecta y lanza error', async () => {
            await assert.rejects(async () =>{
                await crearServidor(server.address().port, db)
        }, (error)=>{
            assert.strictEqual(error.message, 'address in use')
            return true
            })
        })
    })

    describe('si no hay turnos', () => {
        it('devuelve coleccion vacia', async () => {
            const turnos = await cliente.getTurnos() 
            const esperados = []
            assert.deepStrictEqual (turnos, esperados)
        })
    })

    describe('si hay turnos', () => {
        it('devuelve una coleccion con todos los turnos', async () => {
            db.add(turno)
            db.add(turno2)

            const turnos = await cliente.getTurnos() 
            const esperados = [turno, turno2]
            assert.deepStrictEqual (turnos, esperados)
        })
    })
})


