// Charger le module HTTP
const http = require("http");

// Charger mon module "loadXML"
const loadXML = require("./modules/loadXML");

http.createServer(function (requete, reponse) {
    reponse.writeHead(200, {"Content-Type": "text/html"});
    loadXML.getUsers(function (err, users) {
        if (err) {
            reponse.write("Impossible de charger les utilisateurs");
        } else {
            for (let i = 0; i<users.length; i++) {
                reponse.write(users[i].id + " " + users[i].prenom + " " + users[i].nom + "<br />");
            }
        }
        reponse.end();
    });
}).listen(3000);
