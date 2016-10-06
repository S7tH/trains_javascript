/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var count = 1;

while(count <= 6)
{
    var myNbr = Number(prompt("Devinez le nombre mystere en moins de 6 essais..."));

    if(myNbr < solution)
    {
        console.log(myNbr + " est trop petit");
    }
    else if(myNbr > solution)
    {
        console.log(myNbr + " est trop grand");
    }
    else if(myNbr === solution)
    {
        console.log("Bravo ! la solution était " + solution);
        console.log("Vous avez trouvé la solution en " + count  + " essai(s)");
        break;
    }
    else
    {
        console.log("Ceci n'est pas un nombre !");
        count--;
    }
    
    count++;
}

if(count > 6)
{
    console.log("perdu... la solution était " + solution);
}

