// Charger le module FS (File System)
const fs = require("fs");

// Charger le module XML
const xml2js = require("xml2js");

exports.saveUser = function (user, callback) {    
    const builder = new xml2js.Builder();

    const json = {};
    json.utilisateur = user;
    json.utilisateur.$ = {};
    json.utilisateur.$.id = 1;

    const xmlBuilder = builder.buildObject(json);
    const xmlString = xmlBuilder.toString();
    const xmlFilename = "./resources/" + user.prenom + " " + user.nom;
    fs.writeFile(xmlFilename, xmlString, function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
};

