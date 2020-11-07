const axios = require('axios');

function crearCliente(urlServidor, puerto, rutaApi) {
    return {
        getAll: async () => {
                const respuesta = await axios.get(`${urlServidor}:${puerto}${rutaApi}`);
                return respuesta.data;
            }
        }
}

    module.exports = {crearCliente}
