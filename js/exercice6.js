class Personne {
    constructor(nom, prenom, age = -1){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    
    getIdentite() {
        return this.prenom+" "+this.nom;
    }

    get identite() {
        return this.prenom+" "+this.nom;
    }
}

// contructeur avec val de param par defaut
let moi = new Personne("CONGIUSTI", "Christophe");
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
    }

    get identite() {
        return super.identite+" #"+this.numClient;
    }

    get ca() {
        let sum = 0;
        if (this.commandes !=null && this.commandes != undefined)
            for (let i=0;i<this.commandes.length;i++)
                sum+=this.commandes[i].price;
        return sum;
    }
}
let c = new Client("12345", "CONGIUSTI", "Christophe", 50);
console.log(c);
console.log(c.identite);

class Commande {
    constructor(id, label, price) {
        this.id = id;
        this.label = label;
        this.price = price;
    }
}

cmd1 = new Commande(1, "crayon", 5);
cmd2 = new Commande(2, "papier", 10);
cmd3 = new Commande(3, "gomme", 2);
c.commandes = [ cmd1, cmd2, cmd3 ];
console.log(c.ca);


