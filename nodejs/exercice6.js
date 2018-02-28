// Charger le module FS (File System)
const fs = require("fs");

// Charger le module XML
const xml2js = require("xml2js");

fs.readFile('./resources/exemple.xml', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        // On charge le XML
        xml2js.parseString(data, function (err2, result) {
            if (err2) {
                console.log(err2);
            } else {
                const noeudUtilisateurs = result.utilisateurs.utilisateur;
                const users = [];
                // console.log(utilisateurs);
                for (let i = 0; i < noeudUtilisateurs.length; i++) {
                    const user = {};
                    user.id = noeudUtilisateurs[i].$.id;
                    user.prenom = noeudUtilisateurs[i].prenom;
                    user.nom = noeudUtilisateurs[i].nom;
                    user.age = noeudUtilisateurs[i].age;
                    users.push(user);
                }
                console.log(users);
            }
        });
    }
});
