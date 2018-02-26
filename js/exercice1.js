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

// Tableau d'objets
// Objets en attr
let pere = { "prenom":"Christophe", "nom":"CONGIUSTI" };
let enfants = [{ "prenom":"Enzo", "nom":"CONGIUSTI" }, { "prenom":"Mathis", "nom":"CONGIUSTI" }];
pere.enfants = enfants;
console.log(pere);

// Tableaux
let tabEnfants = [];
const enfant1 = { "prenom":"Enzo", "nom":"CONGIUSTI" };
const enfant2 = { "prenom":"Mathis", "nom":"CONGIUSTI" };
tabEnfants.push(enfant1);
tabEnfants.push(enfant2);
console.log(tabEnfants);

// Boucle for
for (let i=0;i<tabEnfants.length;i++) {
    console.log("enfant["+i+"]="+tabEnfants[i].prenom);
}

// Boucle while ou do while
// while () {}
// do {} while ();

// Operateur
let j=0;
console.log(j++);
console.log(j);
console.log(++j);
j*=2;
console.log(j);

// Switch/case
let sw = "2";
switch (sw) {
    case "2" :
        console.log("Case \"2\""); 
        break;
    default:
        console.log("Par defaut"); 
}
