class Personne {
    constructor(nom, prenom, age = -1) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    getIdentite() {
        return this.prenom + " " + this.nom;
    }

    get identite() {
        return this.prenom + " " + this.nom;
    }
}

// contructeur avec val de param par defaut
const moi = new Personne("CONGIUSTI", "Christophe");
console.log(moi);

// methode "getIdentite"
console.log(moi.getIdentite());

// attribut "identite"
moi.nom = "CONGIUSTI1";
console.log(moi.identite);

// notion d'heritage
class Client extends Personne {
    constructor(numClient, nom, prenom, age) {
        super(nom, prenom, age);
        this.numClient = numClient;
        this.commandes = [];

    }

    ajouteCommande(commande) {
        this.commandes.push(commande);
    }

    get identite() {
        return super.identite + " #" + this.numClient;
    }

    get ca() {
        let sum = 0;
        for (let i = 0; i < this.commandes.length; i++) {
            sum += this.commandes[i].prix;
        }
        return sum;
    }
}

const c = new Client("12345", "CONGIUSTI", "Christophe", 50);
console.log(c);
console.log(c.identite);

/* Ajout des commandes */
class Commande {
    constructor(identifiant, libelle, prix) {
        this.identifiant = identifiant;
        this.libelle = libelle;
        this.prix = prix;
    }
}
c.ajouteCommande(new Commande(1, "crayon", 5));
c.ajouteCommande(new Commande(2, "papier", 10));
console.log(c.ca);
c.ajouteCommande(new Commande(3, "gomme", 2));
console.log(c.ca);

