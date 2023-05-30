//si (position pion X == position case X) && (position pion Y == position case Y) 
{
    if (box.bonus == true) {
        fonctionBonus();
    }
    
    if (box.malus == true) {
        fonctionMalus();
    }
    
    if (box.occupe == true) {
        fonctionChifoumi();
    }
}

function fonctionBonus() {
    console.log("Case bonus")
};

function fonctionMalus() {
    console.log("Case malus")
};

function fonctionChifoumi() {
    console.log("Chifoumi !!!!")
};