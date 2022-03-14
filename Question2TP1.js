//Trier les lettres d'une phrase
//par ordre alphabétique
//Array.form(), split(), sort()

//Propal avec Array.from
let phrase = "une chaine avec des lettres dans un certain ordre pour donner un sens ";
//let tableau = Array.from(phrase.replace(/ /g,""));//le g supprime tout les espaces inutiles
let tableau = Array.from(phrase.replaceAll(/ /g,""));

//Avec SPLIT :
//let phraseModifie = phrase.replace(/ /g,"");
//let tab2 = phraseModifie.split('');

console.log(tableau.sort().toString());

//Moi
/*var phrase = ['une', 'chaine', 'avec', 'des', 'lettres', 'dans', 'un', 'certain', 'ordre', 'pour', 'donner', 'un', 'sens']
var ordre = phrase.sort();
console.log(ordre);
*/
