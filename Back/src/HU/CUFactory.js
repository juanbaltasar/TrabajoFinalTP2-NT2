const { crearPacientesDaoFactory } = require('../Pacientes/Dao/PacientesDaoFactory.js')
const { crearRecetasDaoFactory } = require('../Recetas/Dao/RecetasDaoFactory.js')
const { crearCUEnviarLinkDeRecetaPorMail } = require('../HU/CU.js')
const { MailerFactory } = require('../Modules/MailerFactory.js')
const config = require('../Config/config.js')

const CUFactory = {
    getCUEnviarLink: async () => {
        
        const pacientesDao = await crearPacientesDaoFactory()

        const recetasDao = await crearRecetasDaoFactory()

        const enviador = await MailerFactory.getMailer()

        const baseLink = `${config.getBaseLink()}:${config.getServerPort()}/api/recetas/`

        const CUEnviarLink = crearCUEnviarLinkDeRecetaPorMail(pacientesDao, recetasDao, enviador, baseLink)
        return CUEnviarLink
    }
}

module.exports = CUFactory