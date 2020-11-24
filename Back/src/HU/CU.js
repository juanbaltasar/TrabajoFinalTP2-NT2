async function crearCUEnviarLinkDeRecetaPorMail(pacientesDao, recetasDao, mailer, baseLink) {

    return {
        invocar: async (id) => {

            const persona = await pacientesDao.getById(id)
            const receta = await recetasDao.getByDni(persona.dni)
            const fullLink = baseLink + receta.receta
            mailer.MandarMail(persona.mail, "Descargar turno mail", fullLink)

        }
    }
}

module.exports = { crearCUEnviarLinkDeRecetaPorMail }