async function crearCUEnviarLinkDeRecetaPorMail(pacientesDao, recetasDao, mailer, baseLink) {

    return {
        invocar: async (id) => {

            const persona = await pacientesDao.getById(id)
            const receta = await recetasDao.getByDni(persona[0].dni)
            const fullLink = baseLink + receta[0].receta
            mailer.MandarMail(persona[0].mail, "Descargar turno mail", fullLink)
            
        }
    }
}

module.exports = { crearCUEnviarLinkDeRecetaPorMail }