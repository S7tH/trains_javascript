var monCompte = 
{
    titulaire: "Aurélien",
    solde: 0,
    crediter: function(amount)
    {
        this.solde += amount;
    },
    debiter: function(amount)
    {
        this.solde -= amount;
    },
    decrire: function()
    {
      var description = "Ce compte appartient à " + this.titulaire + " son solde est de " + this.solde;    
      return description; 
    }
}

console.log(monCompte.decrire());

var credit = Number(prompt("entrez le montant à créditer"))
monCompte.crediter(credit);

console.log(monCompte.decrire());

var debit = Number(prompt("entrez le montant à débiter"))
monCompte.debiter(debit);

console.log(monCompte.decrire());