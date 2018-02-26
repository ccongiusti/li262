/**
 * Ceci est un commentaire multi-ligne
 */
console.log("bonjour");

var a = 2;
console.log(a);
var b = 3;
console.log(b);
var somme = a+b;

// Concaténation
console.log("somme="+somme);

if (true){
    // VAR a banir
    // var c = 5; 
    let c = 5;
    console.log("vrai");
    console.log(c); // 5
}

//console.log(c); // 5
const d = 5;
//d=7; // Erreur

if (a == 2) {
    // 
} else if (a == 3) {
    //
}

let x=3;
//x="ok";

console.log(2 == "2"); // true !!!
console.log(2 + "2"); // "22" !!!
console.log(2 === "2"); // false

// Object JS : JSON
// Java Script Object Notation (JSON)
// Client : id(45), prenom(Christophe), nom(CONGIUSTI)
// => { "id":45, "prenom":"Christophe", "nom":"CONGIUSTI"}
// Tableau : []
// => { "id":45, "prenom":"Christophe", "nom":"CONGIUSTI", "commande": [123, 28, 2982] }
let client =  { "id":45, "prenom":"Christophe", "nom":"CONGIUSTI", "commandes": [123, 28, 2982] };
console.log(client.nom);
console.log(client["nom"]);

const commandes = [1, 2, 3];
client.commandes = commandes;
console.log(client.commandes);

// ajout dyn d'un boolean
client.lunettes = true;
console.log(client);



