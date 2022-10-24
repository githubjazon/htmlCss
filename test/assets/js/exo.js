
// __________________________________Exo js 05_________________________________

// var reponse1 = window.prompt("Entrer votre nom");
// var reponse2 = window.prompt("Entrer votre prénom");

// if (window.confirm("Etes-vous un Homme ?") == true) 
// { 
// }
// window.alert("Bonjour Monsieur " + reponse1 +" "+ reponse2); 



// __________________________________Exo js 06__________________________________

// var a = 100;
// var b = 100;
// var c = 1.00;
// var d = true;


// alert("Chaine de caractères : " + a);
// alert(b-a);
// alert(c+a);
// d = false;


// ____________________________________Exo js 07.1____________________________________

// const number = prompt("Ecrit un nombre");

// if(number % 2 == 0) {
//     alert("Le nombre est pair");
// }

// else {
//     alert("Le nombre est impair");
// }



// ____________________________________Exo js 07.2____________________________________


// date = 2022;
// annee = prompt("Quel est votre année de naissance ? ");
// reponse1 = date - annee;

// alert("Vous avez " + reponse1 + " ans");

// if(reponse1 <18) {
// alert("Vous étes mignon, euuu mineur ");
// }

// else{
// alert("Vous étes majeur ");
// }


// ____________________________________Exo js 07.3____________________________________




// er = prompt("Entrer le premier nombre ");
// eme = prompt("Entrer le deuxième nombre");
//  if(er, eme < 1) {
//     alert("division par '0' interdite" );  
//  }

 
// divi = prompt("Entrer un operateur");
// if(divi != "/") {
//     alert("erreur de saisi");
// }
// result = (er / eme);
// alert(result);



// ____________________________________ Exo js 08.1___________________________________

// c = 1 ;
// a =("Saisissez le prénom N° ")

// while ((a + c) != " " ){
//     b = (prompt(a + c));
//     console.count("Prénom N° ");
//     console.log(b);
//     c++;
// }

// ____________________________________ Exo js 08.2___________________________________


// document.write(" les nombres inférieurs à N. <br> <hr>");

// var nbre = 0;
// for(i=1; i<2137; i=i+1)
// {
//   nbre = i;
//   document.write(nbre+' ');
// }

// ____________________________________ Exo js 08.3___________________________________


// document.write(" Programme qui saisit des entiers et en affiche la somme et la moyenne. <br> <br>");
// var nbre = 0;
// for(i=1; i<=10; i++)
// {
    //   nbre = i;
    //   document.write(nbre+' ');
    // }
    
    
    // ____________________________________ Exo js 08.4___________________________________
    
    
    
    
    
    
    
    // ____________________________________ Exo js 08.5___________________________________
    
    
    
    // while (long = prompt("Saisir quelque chose pour connaître le nombre de caractères ")) {
    //     alert("Nombre de caractères : " + long.length);
    
    // }
    


    function getVowels(str) {
        var vowelsCount = 0;
        var string = str.toString();
 
        for (var i = 0; i <= string.length - 1; i++) {

            
   
          if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u"  || string.charAt(i) == "y") {
            vowelsCount += 1;
          }
        }
        return vowelsCount;
      }
      