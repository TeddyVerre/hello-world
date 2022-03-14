//Mettre en majuscule la première lettre de chaque mot d'une phrase

/*
let phrase = "une phrase sans majuscule";

function majusculePremireLettre(phrase) {

    return phrase && phrase[0].toUpperCase() + phrase.slice(1);
}

console.log(majusculePremireLettre());
*/
///////////////////////////////////////////////////////


//Propal
let phrase = "une phrase sans majuscule";
let tableau = phrase.split(' ');
let resultat = '';

for(const chaqueMot of tableau){
  let premiereLettre = chaqueMot.substring(0,1).toUpperCase();
  let lesAutresLettres = chaqueMot.substring(1).toLowerCase();
  let leMotReconstuit = premiereLettre + lesAutresLettres + " ";

  //resultat += leMotReconstuit; // Égal à la ligne dessous
  resultat = resultat + leMotReconstuit;//
}

console.log(resultat);

//Moi
//let phrase = "une phrase sans majuscule";
//function phraseMajuscule(){
//  let majuscule = phrase.charAt(0).toUpperCase() + phrase.slice(1);
//}

//console.log(phraseMajuscule());