var path = require('path');
const express = require('express')
const app = express()
const PORT = 1234


//function enviarReceta(){
    app.get('/:file', function(req, res){

        const file = req.params.file
        const fileLocation = path.join(__dirname, req.params.file)
        res.download(fileLocation, req.params.file);
    });
//}

app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT", PORT); 
})

//module.exports = {enviarReceta}