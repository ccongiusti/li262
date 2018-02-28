// Charger le module HTTP
const http = require("http");

http.createServer( function(requete, reponse) {
    console.log("Requête reçue");
    reponse.writeHead(200, { "Content-Type" : "text/html" })
    reponse.write("<b>Bonjour !</b>");
    reponse.write("<br />");
    reponse.end("Au revoir.");
}).listen(3000);
