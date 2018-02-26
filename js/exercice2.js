function bonjour() {
    console.log("Bonjour !");
}
bonjour();

function affSomme(a, b) {
    console.log(a+b);
}
affSomme(2,3); // affiche 5
affSomme(2,"3"); // affiche 23

function somme(a, b) {
    return a+b;
}
console.log(somme(3,4)); // affiche 7

let sommeVar = function(a, b) {
    return a+b;
};
console.log(sommeVar(5,4)); // affiche 9

let ditBonjour = function(a, b) {
    console.log("Bonjour !");
};
let longueFonction = function(maFonction, delais) {
    if (delais>0) {
        console.log("lancement de '"+maFonction.name+"'");
        setTimeout(() => { 
            maFonction();
        }, delais);
        console.log("lancement apres timeout "+delais+"ms...");
    } else {
        console.log("lancement de sans timeout de '"+maFonction.name+"'");
        maFonction();
    }    
};
longueFonction(ditBonjour, 0);

let client = {};
client.nom = "CONGIUSTI";
client.prenom = "Christophe";
client.ditBonjour = ditBonjour;
client.ditBonjour();

client.commandes = [ 123, 456, 222 ];
client.getNbCommandes = function () {
    return this.commandes.length;
};
console.log("getNbCommandes() retourne "+client.getNbCommandes());

client.ajoutCommande = function (nouvelleCommande) {
    return this.commandes.push(nouvelleCommande);
};
client.ajoutCommande(666);
console.log("getNbCommandes() retourne "+client.getNbCommandes());
