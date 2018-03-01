// Charger le module HTTP
const http = require("http");

// Charger le module URL
const url = require("url");

// Charger le module FS (File System)
const fs = require("fs");

// Charger mon module "loadXML"
const saveXML = require("./modules/saveXML");

http.createServer(function (requete, reponse) {
    reponse.writeHead(200, {"Content-Type": "text/html"});
    const urlObj = url.parse(requete.url, true);
    if (urlObj.pathname === "/form.htm") {
        fs.readFile("./resources/form.htm", function (err, data) {
            if (err) {
                reponse.write("Impossible de charger form.htm");
            } else {
                reponse.write(data);
            }
            reponse.end();
        });
    } else if (urlObj.pathname === "/register") {
        const param = urlObj.query;
        if (param.nom && param.prenom) {
            const login = {};
            login.prenom = param.prenom;
            login.nom = param.nom;
            saveXML.saveUser(login, function (err) {
                if (err) {                    
                    reponse.writeHead(301, {"Location": "/form.htm"});
                } else {
                    reponse.writeHead(301, {"Location": "/form.htm"});
                }
                reponse.end();
            });            
        } else {
            reponse.writeHead(301, {"Location": "/form.htm"});
            reponse.end();
        }
    } else {
        reponse.writeHead(404, {"Content-Type": "text/html"});
        reponse.end();
    }
}).listen(3000);
