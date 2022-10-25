// ______________________________1_________________________________

// j = 0;
// a = 0;
// v = 0;
// c = 0;
// var age;
// do {
//   personnes = window.prompt("Entrez votre âge");
//   if ( age <20) {
//     j++;
    
//   }
//   if ( age >40) {
//     a++;

//   }
//   else if ((age <=100)) {
//     v++;
//   }
// }
// while (age > 100) {
//     window.alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + "" + v + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");
// }
 



// ______________________________2_________________________________FINI

// mult = prompt("Saisir le multiplicateur ");
// console.log("Table de multiplication par " + mult);

// for (i=0; i<=10; i++)
// {
//     resultat = mult * i;
//     console.log(  mult + " * "+i+" = "+resultat);
// }

// ______________________________3_________________________________FINI 

var tab = ["jérémy","odd","yumi","hiroki","ulrich","aelita","william","milly","sissi","jim"];
var saisie = window.prompt(`Veuillez choisir un prénom parmi : ${[...tab]}.`)
if(tab.includes(saisie)){
	tab.splice(tab.indexOf(saisie),1);
	tab.push(" ");
	alert(("Il reste : ") + tab);
}
else{alert("Mauvais prénom saisie")}

// ______________________________4_________________________________






// ______________________________5_________________________________

