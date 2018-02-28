// Charger le module HTTP
const http = require("http");

const module1 = require("./modules/module1");

http.createServer(function (requete, reponse) {
    console.log("Requête reçue");
    reponse.writeHead(200, {"Content-Type": "text/html"});
    // reponse.write("<b>" + module1.disBonjour() + "</b>");
    reponse.write("<b>" + module1.disBonjour2("Christophe") + "</b>");
    reponse.write("<br />");
    reponse.end("Au revoir.");
}).listen(3000);
