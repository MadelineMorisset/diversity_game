function caseBonus(proprieteCase) {
    piocher(bonus);
    afficherCarte();

    switch (bonus.action) {
        case '+1' : deplacerPion(+1);
        break;
        case '+2' : deplacerPion(+2);
        break;
        case '+3' : deplacerPion(+3);
        break;
        // case '-2' : deplacerPion(-2,pionAutreJoueur);
        // break;
        // case 'Rejouer' : jouerTour(memeJoueur);
        // break;
    }
}



function caseMalus(proprieteCase) {
    piocher(malus);
    afficherCarte();

    switch (malus.action) {
        case '-1' : deplacerPion(-1);
        break;
        case '-2' : deplacerPion(-2);
        break;
        case '-3' : deplacerPion(-3);
        // case 'Passer' : jouerTour(joueurSuivant);
        // break;
    }
}