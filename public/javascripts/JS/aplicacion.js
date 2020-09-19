//Hola mundo sincrono con node.js
//var http = require("http")
//var fs = require("fs")
//var myIndex = fs.readFileSync("../QuienesSomos.html")
//var myApp = function (req, res) {
    //res.write(myIndex)
    //res.end("Hola desde node")
//}
//http.createServer(myApp).listen(8080);

//Hola mundo asincrono con node.js
var http = require("http")
var fs = require("fs")

http.createServer(function(req, res) {
    fs.readFile("../QuienesSomos.html", function(err, html){
        console.log(html.toString())
        res.write(html)
        res.end()
    })
}).listen(8080)











//var fs = require('fs')
//var file = './juegos.txt'
//var newFile= './juegos_CALLBACK.txt'

//fs.access(file, fs.F_OK, function(err) {
    //if(err) {
        //console.log('ARCHIVO INEXISTENTE')
    //}
    //else {
        //console.log('EL ARCHIVO EXISTE')
        //fs.readFile(file, function(err, data) {
            //if (err) {
                //console.log('NO SE PUDO LEER EL ARCHIVO');
            //}
            //else {
                //console.log('SE HA LEIDO EXITOSAMENTE EL ARCHIVO');
                //fs.writeFile(newFile, data, function(err){
                    //fs.writeFile(newFile, data, function(err){
                        //return (err) ? console.log('NO SE PUDO COPIAR EL ARCHIVO') : console.log('EL ARCHIVO SE HA COPIADO CON EXITO')
                    //})
               //})
           //}
        //})
    //}
//})


