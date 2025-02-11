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
console.log("4)gerer votre dépenses\n");
console.log("5)Quitter le programme\n");
console.log("---------------------------------------------------\n");
const prompt=require("prompt-sync")();
let choix=parseInt(prompt("Votre choix(1 ou 2 ou 3 ou 4 ou 5)? ")); 
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
        let depenseActif=true;
        let depense=0;
        let tab=[];  //variable permettant de stocker les dépenses ajoutées par l'user
        while(depenseActif)  
            {
                depense=parseInt(prompt("La valeur de votre dépense? "));
                tab.push(depense);
                console.log("//////////////////////////////////////////////////////\n");
                console.log("Voulez-vous enregistrer encore votre dépense?\n");
                console.log("//////////////////////////////////////////////////////\n");
                let reponse=prompt("Choix oui ou non:  (non juste pour consulter la dépense moins chère anis que la moyenne) ");
                if(reponse=="oui")
                {
                    //tab.push(depense); //les dépenses seront ajoutés dans le tableau à mesure que l'user continue de répondre oui
                    //On ne rajoute pas avec tab.push(depense) si  la reponse est oui mais on va continuer la boucle
                    continue;
                }
                else if(reponse=="non")
                {
                    let minimum=tab[0];
                    for(let i=1; i<tab.length; i++){
                        if(tab[i]<minimum)
                        {
                            minimum=tab[i];
                        }
                    }
                    console.log("La dépense la moins chère est: "+ minimum+ "Ar");
                    let somme=0;
                    for(let j=0; j<tab.length; j++){
                        somme+=tab[j];
                    }
                    let moyenne=somme/tab.length;
                    depenseActif=false;
                    break;
                }
            }   
            break   
    case 5:
        console.log("Merci d'avoir utilisé le programme,Au revoir!!!");
        actif=false;  //Cela signifie que la boucle est stoppée
        break
    default:
        console.log("Vous devez choisir entre 1/2 ou 3");
    break    
    }
}
