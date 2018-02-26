let tab1 = [ 1, 2, 3 ];
let tab2 = [ 4, 5 ];
let tab3 = [];

// TAB3 : [ 1, 2, 3, 4, 5 ]
tab3.push(tab1);
tab3.push(tab2);
console.log(tab3); // FAIL

tab3 = tab1.concat(tab2);
console.log(tab3); // GOOD

tab3 = [ 0 ];
tab3 = tab3.concat(tab1).concat(tab2);
console.log(tab3); // GOOD

tab3 = [ 0 ];
tab3 = tab3.concat(tab1, tab2); // on peut passer n paramêtres
console.log(tab3); // GOOD

// Interessant : operateur "..." indique les valeurs
tab3 = [ 0, ...tab1, ...tab2 ];
console.log(tab3); // GOOD

const somme = function( a, b, c, d ) {
    return a+b+c+d;
};
somme(1,2,3,4);

let tab4 = [ 1, 2, 3, 4 ];
console.log(somme(tab4[0], tab4[1], tab4[2], tab4[3]));
console.log(somme(...tab4));

let tab5 = [ 1, 2, 3 ];
console.log(somme(...tab5)); // FAIL

let tab6 = [ 1, 2, 3, 4, 5 ];
console.log(somme(...tab6)); // GOOD

const monIdentite = { "nom" : "CONGIUSTI", "prenom" : "Christophe" };
const mesEnfants = { "enfants": [ "Enzo", "Mathis" ] };
moi = { ...monIdentite, ...mesEnfants };
console.log(moi);
