console.log('Hello World');

console.log('Hello World');

let uneVariable;
let unChiffre = 42;

console.log(uneVariable);
console.log(unChiffre);

unChiffre = "Salut";
console.log(unChiffre);


mafonction(); // Je peux appeler une fonction même avant d la déclarer, car le script est lu une première fois

function mafonction(){ // Une procédure
    console.log("L'intérieur de ma fonction.");
}

/**
 * Cette fonction fait l'addition de deux nombres
 * @param nbre1
 * @param nbre2
 * @returns {*}
 */
function addition(nbre1, nbre2) {
    return nbre1 + nbre2;
}
console.log(addition(1, 2)); // JUste taper 1 et 2 et l'IDE complète avec nbre: etc..


mafonction();



let hd2wm143 = ['Samuel', 'Clement', 'Rhyan'];
console.log(hd2wm143.toString());
console.log("Taille du tableau : " + hd2wm143.length);
hd2wm143.push('Julien');

console.log(hd2wm143);


for (let chaqueEtudiant of hd2wm143) {
    if(chaqueEtudiant === 'Julien'){
        console.log("J'ai trouvé Julien.");
    }
}