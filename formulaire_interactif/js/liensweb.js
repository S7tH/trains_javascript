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
    }, 
];


// TODO : compléter ce fichier pour ajouter les liens à la page web

//je récupère la longueur de ma listeLiens dans une variable
var linkLength = listeLiens.length;
//j'initialise ma var i pour ma boucle for
var i = 0;

//on récupère l'élément container
var divElt = document.getElementById("contenu");

for(i; i < linkLength; i++)
{
    //on créé nos div contenant nos liens
    var linkElt = document.createElement("div");
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


//########### COMMENCE ICI POUR LA PARTIE 2 #######################

// TODO : compléter ce fichier pour ajouter les liens à la page web à l'aide d'un formulaire

//on récupère nos éléments html
var containerElt = document.getElementById('control');

//une fonction pour paramétrer des styles css communs
function css(element)
{
    element.style.borderRadius = 6+"px";
    element.style.backgroundColor = "white";
}

//création de notre boutton ajouer un lien par le DOM
var buttonElt = document.createElement("button");
    buttonElt.id ="addLink";
    buttonElt.textContent = "Ajouter un lien";
    css(buttonElt);
    containerElt.appendChild(buttonElt);

//création de notre formulaire par le DOM
var formElt = document.createElement('form');
var newAutorElt = document.createElement('input');
    newAutorElt.type = "text";
    newAutorElt.name = "autor";
    newAutorElt.id = "autor";
    newAutorElt.required= true;
    newAutorElt.placeholder = "*Entrez votre nom";
    newAutorElt.style.marginRight = 1+"%";
    css(newAutorElt);
    formElt.appendChild(newAutorElt);

var newTitleElt = document.createElement('input');
    newTitleElt.type = "text";
    newTitleElt.name = "title";
    newTitleElt.id = "title";
    newTitleElt.required= true;
    newTitleElt.placeholder ="*Entrez le titre du lien";
    newTitleElt.style.marginRight = 1+"%";
    css(newTitleElt);
    formElt.appendChild(newTitleElt);

var newUrlElt = document.createElement('input');
    newUrlElt.type = "text";
    newUrlElt.name = "url";
    newUrlElt.id = "url";
    newUrlElt.required = true;
    newUrlElt.placeholder ="*Entrez l'url du lien";
    newUrlElt.style.marginRight = 1+"%";
    css(newUrlElt);
    formElt.appendChild(newUrlElt);

var addLinkElt = document.createElement('input');
    addLinkElt.type = "submit";
    addLinkElt.value = "Ajouter";
    css(addLinkElt);
    formElt.appendChild(addLinkElt);
    
//on parente le tout à notre container
    containerElt.appendChild(formElt);

//on désactive le block formulaire
    formElt.style.display="none";

//lorsque l'on clic sur le bouton Ajouter un lien on fait disparaitre le bouton ajouter et affiche le formulaire   
buttonElt.addEventListener('click', function()
{
    buttonElt.style.display="none";
    formElt.style.display="block";
});

//notre regex verifie que la valeur entrée commence (^) par un caractère ou un chiffre (et non par un espace) et qu'elle en contient 1 ou plusieurs.
var regexNoEmpty = /^[a-zA-Z0-9]+/;


//fonction qui va modifier en css la couleur des bordures des inputs
function colorisation(targ, color)
{
    targ.style.boxShadow = 8+"px "+8+"px "+8+"px "+color;
    targ.style.borderColor = color;
}

//fonction qui va coloriser les inputs
function testColor(targ)
{
    if(!regexNoEmpty.test(targ.value))
    {
       colorisation(targ,"red");            
    }
    else if(regexNoEmpty.test(targ.value))
    {
        colorisation(targ,"green");
    }
}

//on crée un événement qui met le bord en bleu lorsqe l'élément est ciblé
newAutorElt.addEventListener('focus', function()
{
    colorisation(newAutorElt, "#428bca");
}); 
newAutorElt.addEventListener('blur', function()
{
    testColor(newAutorElt);
}); 
//on crée un événement qui vérifie la conformité de nos éléments lors de la saisie   
newAutorElt.addEventListener('input', function(e)
{
    testColor(newAutorElt);
});  


newTitleElt.addEventListener('focus', function()
{
    colorisation(newTitleElt, "#428bca");
}); 
newTitleElt.addEventListener('blur', function()
{
    testColor(newTitleElt);
}); 
//on crée un événement qui vérifie la conformité de nos éléments lors de la saisie   
newTitleElt.addEventListener('input', function(e)
{
    testColor(newTitleElt);
});  

newUrlElt.addEventListener('focus', function()
{
    colorisation(newUrlElt, "#428bca");
}); 
newUrlElt.addEventListener('blur', function(e)
{
    testColor(newUrlElt);
});
//on crée un événement qui vérifie la conformité de nos éléments lors de la saisie   
newUrlElt.addEventListener('input', function(e)
{
    testColor(newUrlElt);
});  
  

//function qui créée le nouveau lien 
function createNewLink()
{
    //on créé notre div contenant notre lien
    var linkElt = document.createElement("div");
        //on lui assimile notre class lien
        linkElt.className = "lien";
        //on lui attribu des parametres css
        linkElt.style.height = "100%";
        linkElt.style.width = "98%";
        linkElt.style.padding = "1%";
        linkElt.style.margin = "auto";


    //on créé le contenu txt de notre div
    
    //on commence avec le titre url
    var titleElt = document.createElement("a");
        titleElt.href = newUrlElt.value;
        titleElt.style.color = "#428bca";
        titleElt.style.fontWeight = "bold";
        titleElt.style.textDecoration = "none";
        titleElt.appendChild(document.createTextNode(newTitleElt.value + " "));
    
    //puis l'url
    var urlElt = document.createElement("span");
        //on créé son texte url
        urlElt.appendChild(document.createTextNode(newUrlElt.value));
   
    //le retour a la ligne
    var returnElt = document.createElement("br");

    //on finit par l'auteur
    var autorElt = document.createElement("span");
        autorElt.appendChild(document.createTextNode("ajouté par " + newAutorElt.value));

        //on assimile notre contenu en tant qu'élément enfant de nos div
        linkElt.appendChild(titleElt);
        linkElt.appendChild(urlElt);
        linkElt.appendChild(returnElt);
        linkElt.appendChild(autorElt);
        
    //on récupère les div de contenu
        var firstDivs = document.querySelectorAll("#contenu div");
        for(var i = 0; i < firstDivs.length; i++)
        {
            //on assimle notre div en tant qu'élément enfant de notre div contenu avant le premier élément enfant.
            divElt.insertBefore(linkElt, firstDivs[0]);
           
        }
         //on ajoute un espace après le nouveau block div
        linkElt.insertAdjacentHTML("afterend", '<br/>');
       
}


//on créé notre message de confirmation
    var succesMsg = document.createElement('div');
    //on lui assimile notre class lien
        succesMsg.className = "lien";
        //on lui attribu des parametres css
        succesMsg.style.background = "powderblue";
        succesMsg.style.color = "#428bca";
        succesMsg.style.fontWeight = "bold";
        succesMsg.style.height = "100%";
        succesMsg.style.width = "98%";
        succesMsg.style.padding = "1%";
        succesMsg.style.margin = "auto";
        containerElt.insertBefore(succesMsg, buttonElt);
        succesMsg.insertAdjacentHTML("afterend",'<br>');
        succesMsg.style.display = "none";

var regexUrl = /^http:\/\/.+/;
var regexUrlSecure = /^https:\/\/.+/;
var regexUrlWrong = /.+http/;
//on verifie la conformité des champs lors du clic sur Ajouter
formElt.addEventListener('submit', function(e)
{
    
    
    //on verifie une seconde fois que les champs ne soient pas vide (se fait déjà avec l'évènement input) et bloque la transmission du formulaire dans tous les cas n'ayant pas de base de donnée.
    if(!regexNoEmpty.test(newAutorElt.value) || !regexNoEmpty.test(newTitleElt.value)|| !regexNoEmpty.test(newUrlElt.value)) 
    {
        e.preventDefault();
    }
    else if(regexNoEmpty.test(newAutorElt.value) || regexNoEmpty.test(newTitleElt.value)|| regexNoEmpty.test(newUrlElt.value)) 
    {   
        //on verifie que le client n'a pas mis de texte avant http si il l'a écrit sinon son lien est effacé
        if(regexUrlWrong.test(newUrlElt.value))
        {
                newUrlElt.value = " ";
        }
        //on verifie que le champ url contient http(s) sinon on l'ajoute automatiquement
        else 
        {
            if(!regexUrl.test(newUrlElt.value) && !regexUrlSecure.test(newUrlElt.value))
            {
                var textValue = newUrlElt.value;
                newUrlElt.value = "http://" + textValue;
            }
        
            createNewLink()
            
            buttonElt.style.display="block";
            formElt.style.display="none";
            succesMsg.style.display="block";
            succesMsg.textContent = "Le lien " + newTitleElt.value + " à été ajouté !";
            
            //au bout de deux secondes le message sera caché de nouveau.
            setTimeout(function ()
            {
                succesMsg.style.display = "none";
            
            }, 2000);
       
        
            //ayant préféré le changement de style css avec display à innerHTML la technique change et doit être adaptée.
            //on vide les valeurs de notre formulaire et redonne à nos input un bord neutre.
            newAutorElt.value = null;
            colorisation(newAutorElt, "white");
            newTitleElt.value = null;
            colorisation(newTitleElt, "white");
            newUrlElt.value = null;
            colorisation(newUrlElt, "white");
        }
        e.preventDefault();
    }
});