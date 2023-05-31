function analyserCase() {
    if (plateau[joueur.numeroCase].malus == true) {
        caseMalus();
    } else if (plateau[joueur.numeroCase].bonus == true) {
        caseBonus();
    } else if (plateau[joueur.numeroCase].occupe == true) {
        chifoumi();
    } else {
        jouerTour();
    }
}