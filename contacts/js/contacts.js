/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

/*on créé un objet qui contient les paramètres généraux de nos contacts et leur description*/
var Contact = {
    initContact: function(name, firstName)
    {
        this.name = name;
        this.firstName = firstName;
    },
    
    describeContact: function()
    {
        var describe = "Nom: " + this.name + ", " + "Prénom: " + this.firstName;
        return describe;
    }
};

//Création de nos deux contacts de base
var contact1 = Object.create(Contact);
contact1.initContact("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.initContact("Nelsonne", "Mélodie");

//création d'un tableau qui contiendra nos objets contact
var contactArray = [];
contactArray.push(contact1);
contactArray.push(contact2);

/*initialisation de la variable choice pour que la condition nous laisse entrer dans la boucle switch la première fois*/
var choice = -1;

//texte de bienvenue
var welcome = "Bienvenue dans le gestionnaire des contacts ! \n"
            + "1: Lister les contacts \n"
            + "2: Ajouter un contact \n"
            + "3: Connaître le nombre de vos contacts \n"
            + "0: Quitter";

//tant que le choix n'est pas 0 la boucle se répète
while(choice !== 0)
{
    //execution du message de bienvenue
    console.log("\n" + welcome);
    var choice = Number(prompt("Choisissez une option"));
   
    
    switch(choice)
    {
        case 1:
        
            console.log("Voici la liste de tous vos contacts :");
         
            contactArray.forEach(function(contact)
            {
                console.log(contact.describeContact() + "\n");
            });
            break;
        
        case 2:
        
            var addName = String(prompt("Entrez son nom de famille"));
            var addFirstName  = String(prompt("Entrez son prénom"));
            
            
            if(addName !== '' && addFirstName !== '')
            {
                var addContact = Object.create(Contact);
                addContact.initContact(addName, addFirstName);
                contactArray.push(addContact);
        
                console.log("Le contact à bien été ajouté ! \n");
            }
            else
            {
                console.log("Le contact doit avoir un nom et un prénom ! \n");
            }
            break;
           
            
        case 3:
            //ajout d'une option qui indique le nombre de contacts
            var countContact = contactArray.length;
            console.log("Le nombre de vos contacts est de " + countContact + "\n");
            break;
            
        
        case 0:
        
            console.log("Au revoir");
            break;
        
        default:
            //si l'on tape une autre touche que celles désignées
            console.log("Ceci n'est pas une option valide ! \n");
            break; 
    }
}
    