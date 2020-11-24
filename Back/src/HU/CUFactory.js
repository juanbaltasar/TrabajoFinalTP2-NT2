const { crearPacientesDaoFactory } = require('../Dao/PacientesDaoFactory.js')
const { crearRecetasDaoFactory } = require('../Dao/RecetasDaoFactory.js')
const { crearCUEnviarLinkDeRecetaPorMail } = require('../HU/CU.js')
const { MailerFactory } = require('../Modules/MailerFactory.js')
const config = require('../Config/config.js')

const pacientesDao = crearPacientesDaoFactory()

const recetasDao = crearRecetasDaoFactory()

const enviador = MailerFactory.getMailer()

const baseLink = `${config.getBaseLink()}:${config.getServerPort()}/api/recetas/`

const CUEnviarLink = crearCUEnviarLinkDeRecetaPorMail(pacientesDao, recetasDao, enviador, baseLink)

const CUFactory = {
    getCUEnviarLink: () => {
        return CUEnviarLink
    }
}

module.exports = CUFactory