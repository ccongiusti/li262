// Charger le module HTTP
const http = require("http");

// Charger le module FS (File System)
const fs = require("fs");

http.createServer(function (requete, reponse) {
    reponse.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile("./resources/exemple.html", function (err, data) {
        if (err) {
            console.log(err);
        } else {
            reponse.write(data);
        }
        reponse.end("Au revoir.");
    });
}).listen(3000);
