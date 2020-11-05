// const assert = require('assert')
// const {buscarTurnosDeMañana, suscribirParaRecordatorio, desuscribirRecordatorio} = require('../../Back/src/Temporizador/index.js')


// describe('Funcion buscarTurnosDeMañana', () => {
//     describe('recibe lista de turnos sin turnos para el dia siguiente', () => {
//         it('no hay turnos asignados para mañana', async () => {
//             const turnos = [{
//                 nombre: "lisa",
//                 apellido: "fernandez",
//                 dni:123,
//                 mail: "lisa@getmail.com",
//                 fecha: {
//                     hora:10,
//                     dia:29,
//                     mes:11
//                 }
//               }, {
//                 nombre: "manuel",
//                 apellido: "hernandez",
//                 dni:456,
//                 mail: "manuel@getmail.com",
//                 fecha: {
//                     hora:10,
//                     dia:28,
//                     mes:11
//                 }
//               }] 
         
//             try {
//                 await buscarTurnosDeMañana(turnos)
//                 console.log('fail:deberia lanzar error')
//             } catch (error) {
//                 if (error.message === 'No hay turnos') {
//                     console.log('ok')
//                 } else {
//                     console.log('fail: lanzo otro error')
//                     console.log(error)
//                 }
//             }
//         })
//     })

//     describe('recibe lista de turnos con turnos para el dia siguiente', () => {
//         it('envia mail', async () => {
//             const turnos = [{
//                 nombre: "lisa",
//                 apellido: "fernandez",
//                 dni:123,
//                 mail: "lisa@getmail.com",
//                 fecha: {
//                     hora:10,
//                     dia:28,
//                     mes:10
//                 }
//               }, {
//                 nombre: "manuel",
//                 apellido: "hernandez",
//                 dni:456,
//                 mail: "manuel@getmail.com",
//                 fecha: {
//                     hora:12,
//                     dia:28,
//                     mes:10
//                 }
//               }]

//             try {
//                 await buscarTurnosDeMañana(turnos)
//                 console.log('ok')
//             } catch (error) {
//                 console.log('fail: no deberia lanzar error')
//                 console.log(error)
//             }
//         })
//     })
// })


// describe('Funcion suscribirParaRecordatorio', () => {
//     describe('recibe lista de turnos y el turno generado', () => {
//         it('devuelve lista de turnos con el nuevo turno', async () => {
//             const turnos = [{
//                 nombre: "lisa",
//                 apellido: "fernandez",
//                 dni:123,
//                 mail: "lisa@getmail.com",
//                 fecha: {
//                     hora:10,
//                     dia:29,
//                     mes:11
//                 }
//               }] 
//               const turno = {
//                 nombre: "melisa",
//                 apellido: "sanchez",
//                 dni:789,
//                 mail: "melisa@getmail.com",
//                 fecha: {
//                     hora:12,
//                     dia:13,
//                     mes:11
//                 }
//               }
//               const esperado = [{
//                 nombre: "lisa",
//                 apellido: "fernandez",
//                 dni:123,
//                 mail: "lisa@getmail.com",
//                 fecha: {
//                     hora:10,
//                     dia:29,
//                     mes:11
//                 }
//               }, {
//                 nombre: "melisa",
//                 apellido: "sanchez",
//                 dni:789,
//                 mail: "melisa@getmail.com",
//                 fecha: {
//                     hora:12,
//                     dia:13,
//                     mes:11
//                 }
//               }] 
//             const resultado= await suscribirParaRecordatorio(turnos, turno)
//             assert.deepStrictEqual(resultado, esperado)
//         })
//     })
// })


// describe('Funcion desuscribirRecordatorio', () => {
//     describe('recibe lista de turnos y el turno a eliminar', () => {
//         it('devuelve lista de turnos sin el turno enviado', async () => {
//             const turnos = [{
//                 nombre: "lisa",
//                 apellido: "fernandez",
//                 dni:123,
//                 mail: "lisa@getmail.com",
//                 fecha: {
//                     hora:10,
//                     dia:29,
//                     mes:11
//                 }
//               }, {
//                 nombre: "melisa",
//                 apellido: "sanchez",
//                 dni:789,
//                 mail: "melisa@getmail.com",
//                 fecha: {
//                     hora:12,
//                     dia:13,
//                     mes:11
//                 }
//               }] 
//             const turnoAEliminar = {
//                 nombre: "lisa",
//                 apellido: "fernandez",
//                 dni:123,
//                 mail: "lisa@getmail.com",
//                 fecha: {
//                     hora:10,
//                     dia:29,
//                     mes:11
//                 }
//               }
//             const esperado = [{
//                 nombre: "melisa",
//                 apellido: "sanchez",
//                 dni:789,
//                 mail: "melisa@getmail.com",
//                 fecha: {
//                     hora:12,
//                     dia:13,
//                     mes:11
//                 }
//               }]
              
//             const resultado= await desuscribirRecordatorio(turnos, turnoAEliminar)
//             assert.deepStrictEqual(resultado, esperado)
//         })
//     })
// })