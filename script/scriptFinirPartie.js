function finirPartie(positionJoueur) {
    let caseVictoire = plateau[27];
    if (positionJoueur == caseVictoire ) {
        ecranVictoire();
    }
}