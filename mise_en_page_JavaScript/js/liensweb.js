/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

//je récupère la longueur de ma listeLiens dans une variable
var LinkLength = listeLiens.length;
//j'initialise ma var i pour ma boucle for
var i = 0;

//on récupère l'élément container
var divElt = document.getElementById("contenu");

for(i; i < LinkLength; i++)
{
    //on créé nos div contenant nos liens
        linkElt = document.createElement("div");
        //on lui assimile notre class lien
        linkElt.className = "lien";
        //on lui attribu des parametres css
        linkElt.style.height = "100%";
        linkElt.style.width = "98%";
        linkElt.style.padding = "1%";
        linkElt.style.margin = "auto";


    //on créé le contenu txt de nos div
    
    //on commence avec le titre url
    var titleElt = document.createElement("a");
        titleElt.href = listeLiens[i].url;
        titleElt.style.color = "#428bca";
        titleElt.style.fontWeight = "bold";
        titleElt.style.textDecoration = "none";
        titleElt.appendChild(document.createTextNode(listeLiens[i].titre + " "));
    
    
    //puis l'url
    var urlElt = document.createElement("span");
        //on créé son texte url
        urlElt.appendChild(document.createTextNode(listeLiens[i].url));
   
    //le retour a la ligne
    var returnElt = document.createElement("br");

    //on finit par l'auteur
    var autorElt = document.createElement("span");
        autorElt.appendChild(document.createTextNode("ajouté par " + listeLiens[i].auteur));

        //on assimile notre contenu en tant qu'élément enfant de nos div
        linkElt.appendChild(titleElt);
        linkElt.appendChild(urlElt);
        linkElt.appendChild(returnElt);
        linkElt.appendChild(autorElt);

        //on assimle nos div en tant qu'élément enfant de notre div contenu
        divElt.appendChild(linkElt);
        //on ajoute un espace entre chaque block
        divElt.appendChild(document.createElement("br"));
}