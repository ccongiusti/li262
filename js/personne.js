class Personne {
    constructor(id, nom, prenom, age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    get identite() {
        return this.nom + " " + this.prenom;
    }
}

export {Personne};
