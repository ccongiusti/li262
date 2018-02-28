// Charger le module HTTP
const http = require("http");

// Charger le module URL
const url = require("url");

http.createServer(function (requete, reponse) {
    reponse.writeHead(200, {"Content-Type": "text/html"});
    reponse.write("<pre>");

    const method = requete.method;
    reponse.write("method=" + method + "<br />");

    const urlSrc = requete.url;
    reponse.write("url=" + urlSrc + "<br />");

    const urlObj = url.parse(urlSrc, true);
    reponse.write("url appelee=" + urlObj.pathname + "<br />");

    reponse.write("[arguments]<br />");
    for (const key in urlObj.query) {
        // urlObj.query est un objet JSON
        reponse.write(" - " + key + "=" + urlObj.query[key] + "<br />");
    }

    reponse.write("</pre>");
    reponse.end("Au revoir.");
}).listen(3000);
