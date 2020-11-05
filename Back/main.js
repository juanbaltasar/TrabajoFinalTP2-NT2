const { createServer } = require('./src/Servidor/Server.js')
const open = require('open')

let server

async function main() {
    try {
        server = await createServer({ port: 1111 })
        console.log(`Server listening on PORT: ${server.port}`)
        open(`http://localhost:${server.port}/test.pdf`);
    } catch (e) {
        console.log(e.message)
    }
}

process.on('SIGINT', async () => {
    try {
        if (server) {
            server.close()
        }
    } catch (error) {
        console.err(error)
    } finally {
        process.exit(0)
    }
})

main()