// Charger le module HTTP
const http = require("http");

// Charger le module FS (File System)
const fs = require("fs");

// Charger le module URL
const url = require("url");

http.createServer(function (requete, reponse) {
    reponse.writeHead(200, {"Content-Type": "text/html", "Charset": "utf-8"});

    const urlObj = url.parse(requete.url, true);

    const accessFilename = "./access.log";

    if (urlObj.query.delete === "true") {
        // Destruction du log
        fs.unlink(accessFilename, function (err) {
            if (err) {
                console.log("Call of unlink error : " + err);
            } else {
                reponse.write("Fichier détruit<br />");
            }
            reponse.end("Au revoir (unlink).");
        });
    } else {
        // Append du log
        let content = urlObj.pathname;
        for (const key in urlObj.query) {
            content += " " + key + "=" + urlObj.query[key];
        }
        content += "\n";
        fs.appendFile(accessFilename, content, function (err) {
            if (err) {
                console.log("Call of appendFile error : " + err);
            } else {
                reponse.write(urlObj.pathname + "<br />");
            }
            reponse.end("Au revoir (appendFile).");
        });
    }
}).listen(3000);
