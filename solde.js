console.log("Mini-programme en javascript");
let solde=1000000;
let actif=true; //Variable permettant de controler le programme,Cela signifie que la boucle continue de répéter à chaque fois permettant qu'apres chaque choix l'utlisateur revient au menu principal
while(actif){
console.log("---------------------------------------------------\n");
console.log("Veuillez choisir les différentes options: ");
console.log("\n");
console.log("1)Consultation du solde\n");
console.log("2)Retrait d'argent\n");
console.log("3)Faire un dépot d'argent\n");
console.log("4)Quitter le programme\n");
console.log("---------------------------------------------------\n");
const prompt=require("prompt-sync")();
let choix=parseInt(prompt("Votre choix(1 ou 2 ou 3 ou 4)? ")); 
switch(choix)
{
    case 1:
        console.log("votre solde actuel est: "+ solde+ "Ar");
        break
    case 2:
        let retraitActif=true;
        while(retraitActif){     //permettant à l'utilisatur de faire plusieurs retraits sans revenir au menu principal
        let retrait=parseInt(prompt("la valeur de votre retrait d'argent: "));
        if(solde>=retrait)  //Condition permettant de verifier si la solde est suffisant ou pas
        {
            solde=solde-retrait;  //la valeur du solde est mise a jour 
            console.log("Retrait avec succès!!");
        }
        else{
            console.log("Votre solde est insuffisant pour effectuer cet retrait");
        }    
            console.log("//////////////////////////////////////////////////////\n");
            console.log("Voulez-vous retirer encore de l'argent ou pas?\n");
            console.log("//////////////////////////////////////////////////////\n");
            let reponse=prompt("Choix oui ou non:  (non juste pour consulter votre solde) ");
            if(reponse!=="oui")
            {
                console.log("Votre solde final est: " + solde + "Ar");
                retraitActif=false;
                break;  //On stoppe la boucle externe
            }
    }
        break
    case 3:
        let depotActif=true;
        while(depotActif)
        {
            let depot=parseInt(prompt("La valeur de votre dépot d'argent? "));
            solde=solde+depot;
            console.log("//////////////////////////////////////////////////////\n");
            console.log("Voulez-vous deposer encore de l'argent ou pas?\n");
            console.log("//////////////////////////////////////////////////////\n");
            let reponse=prompt("Choix oui ou non:  (non juste pour consulter votre solde) ");
            if(reponse!=="oui")
            {
                console.log("Votre solde final est: " + solde + "Ar");
                depotActif=false;
                break;  //On stoppe la boucle externe
            }
        }  
        break     
    case 4:
        console.log("Merci d'avoir utilisé le programme,Au revoir!!!");
        actif=false;  //Cela signifie que la boucle est stoppée
        break
    default:
        console.log("Vous devez choisir entre 1/2 ou 3");
    break    
        
    }
}
