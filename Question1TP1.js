//Tirer, au hasard, tous les nombres
//de la plage [0:100]
//Math.random(),push(), length


let tabBingo = new Array(100);
tabBingo.fill(false);

//Identique au tabBingo.fill
/*for (let i = 0; i < tabBingo.length ; i++) {
    tabBingo[i] =false;
}*/

let compteur = 0;
let nbreEssai = 0;
let hasard;

do {
  //Je tire un nombre au sort
  hasard = Math.round(Math.random()*100);
  //Je verifie s'il est déjà dans le tableau
   if (tabBingo[hasard] === false) {
       tabBingo[hasard] = true;
       compteur++;
   }
   nbreEssai++;
} while (compteur<100);
console.log("Nombre d'essai : " + nbreEssai);