const lin = [];
let somme = null;
let minLin = null;
let maxLin = null;
let moyenneLin = null;
let affich = '';

while (lin[lin.length-1] !==0) {  //Utilisation d'une boucle while puisqu'on ne sait pas quand l'utilisateur aura fini de rentré ces nombres
    lin.push(parseInt(prompt("Entrez un nombre")));  // ajout à la dernière postion de la liste le nombre rentré par l'utilisateur (utilisation de parseInt pour faire de l'entré un entier)
    if(lin[lin.length-1] !==0){
        console.log(`Vous venez d'entrer le nombre : ${lin[lin.length-1]}`);
    }
}

lin.pop(); // On enlève le 0 puisqu'il ne sera pas utile par la suite

somme = lin[0];
minLin = lin[0];
maxLin = lin[0];

for(let i = 1; i<lin.length; i++){
    somme += lin[i]; // On profite de la boucle pour ajouté chaque nombres à notre somme on aurais pu le faire dans la première boucle
    if(minLin>lin[i]){ // Teste du min
        minLin = lin[i];
    }
    if(maxLin<lin[i]){ // Teste du max
        maxLin = lin[i];
    }
}

moyenneLin = somme / lin.length;

affich = `${lin.length} nombres saisis
Compris entre ${minLin} et ${maxLin}
Pour une somme de ${somme}
Et une moyenne de ${moyenneLin}`; // Utilisation d'une string pour evité d'écrire 2 fois dans les 2 lignes suivantes

console.log(affich); //On affiche le résultats dans la console
alert(affich); // Puis dans une fenêtre