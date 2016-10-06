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

//on récupère notre élément html
var list = document.getElementById('list');
var view = document.getElementById('pannelView');


list.addEventListener('change', function()
{
    
    switch(list.options[list.selectedIndex].index)
    {
      case 0:
            
            view.innerHTML = '<h3>Faites défiler le bandeau pour choisir une option.</h3>';
            console.log("Faites défiler le bandeau pour choisir une option.");
         
            break;
            
      case 1:
            
            view.innerHTML = '<h3>Voici la liste de tous vos contacts : </h3>';
            console.log("Voici la liste de tous vos contacts :");
         
            contactArray.forEach(function(contact)
            {
                view.innerHTML += '<span>' + contact.describeContact() + '</span><br/>';
                console.log(contact.describeContact() + "\n");
            });
            break;
        
        case 2:
            function action()
            {
            var formulaire = '<form id="myForm"><label>Entrez son nom de famille : </label/><input type="text" id="addName"/><br/><label>Entrez son prénom : </label/><input type="text" id="addFirstName"/><input type="submit" value="Valider"/<form>';
            
            
            view.innerHTML = formulaire;
            
            var myForm = document.getElementById('myForm');
            var addName = document.getElementById('addName');
            var addFirstName = document.getElementById('addFirstName');
           
            
            myForm.addEventListener('submit', function(e)
            {
                if(addName.value !== '' && addFirstName.value !== '' && addName.value !== 'null' && addFirstName.value !== 'null')
                {
                    var addContact = Object.create(Contact);
                    addContact.initContact(addName.value, addFirstName.value);
                    contactArray.push(addContact);
                
                    view.innerHTML = '<h3>Le contact à bien été ajouté !</h3><input type="button" value="Ajouter un nouveau contact" id="newContact">';
                    
                    console.log("Le contact à bien été ajouté ! \n");
                    
                     
                    
                    var newContact = document.getElementById('newContact');
                    
                    newContact.addEventListener('click', function()
                    {
                       action(); 
                    });

                }
                else
                {   
                    view.innerHTML = '<h3>Le contact doit avoir un nom et un prénom !</h3><input type="button" value="Recommencer" id="retry">'; 
                    
                    console.log("Le contact doit avoir un nom et un prénom ! \n");
                    
                    var retry = document.getElementById('retry');
                    
                    retry.addEventListener('click', function()
                    {
                       action(); 
                    });
                    
                  
                    
                }
            });
            }
            action();
            break;
            
        case 3:
            //ajout d'une option qui indique le nombre de contacts
            var countContact = contactArray.length;
            view.innerHTML = '<span>Vous avez ' + countContact + ' contact(s)</span><br/>';
            console.log("Le nombre de vos contacts est de " + countContact + "\n");
            break;
            
           
        default:
            //si l'on tape une autre touche que celles désignées
            console.log("Ceci n'est pas une option valide ! \n");
            break;   
    }
});


    