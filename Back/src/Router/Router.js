const express = require('express')
const path = require('path');

let wrap = fn => (...args) => fn(...args).catch(args[2])

function crearRecetasRouter() {
    router = express.Router()

    router.get('/:file', wrap(async (req, res) => {
        const file = req.params.file
        const fileLocation = path.join('./back/files', file)
        res.download(fileLocation, file);
    }))

    return router
}

module.exports = { crearRecetasRouter }