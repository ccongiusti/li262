let user = {"id":1, "nom":"CONGIUSTI", "prenom":"Christophe"};

function extractOject(utilisateur) {
    return { "id" : utilisateur.id, "nom" : utilisateur.nom };
}
console.log(extractOject(user));

function extractTab(utilisateur) {
    return [ utilisateur.id, utilisateur.nom ];
}
console.log(extractTab(user));

let {id, nom} = extractOject(user);
console.log("id = "+id);
console.log("nom = "+nom);

let [id1, nom1] = extractTab(user);
console.log("id1 = "+id1);
console.log("nom1 = "+nom1);
