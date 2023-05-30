let plateau = [
    {
        numeroCase: 0,
        positionX: 220,
        positionY: 90,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 1,
        positionX: 350,
        positionY: 180,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 2,
        positionX: 440,
        positionY: 290,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 3,
        positionX: 390,
        positionY: 400,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 4,
        positionX: 310,
        positionY: 500,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 5,
        positionX: 380,
        positionY: 610,
        bonus: false,
        malus: true,
        occupe: false
    },
    {
        numeroCase: 6,
        positionX: 510,
        positionY: 680,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 7,
        positionX: 630,
        positionY: 610,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 8,
        positionX: 700,
        positionY: 500,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 9,
        positionX: 700,
        positionY: 380,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 10,
        positionX: 660,
        positionY: 260,
        bonus: true,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 11,
        positionX: 680,
        positionY: 140,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 12,
        positionX: 830,
        positionY: 90,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 13,
        positionX: 960,
        positionY: 140,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 14,
        positionX: 990,
        positionY: 260,
        bonus: false,
        malus: true,
        occupe: false
    },
    {
        numeroCase: 15,
        positionX: 940,
        positionY: 380,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 16,
        positionX: 940,
        positionY: 500,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 17,
        positionX: 960,
        positionY: 620,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 18,
        positionX: 1090,
        positionY: 720,
        bonus: true,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 19,
        positionX: 1250,
        positionY: 650,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 20,
        positionX: 1250,
        positionY: 520,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 21,
        positionX: 1250,
        positionY: 390,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 22,
        positionX: 1230,
        positionY: 260,
        bonus: false,
        malus: true,
        occupe: false
    },
    {
        numeroCase: 23,
        positionX: 1320,
        positionY: 140,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 24,
        positionX: 1470,
        positionY: 100,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 25,
        positionX: 1590,
        positionY: 180,
        bonus: true,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 26,
        positionX: 1550,
        positionY: 320,
        bonus: false,
        malus: false,
        occupe: false
    },
    {
        numeroCase: 27,
        positionX: 1490,
        positionY: 450,
        bonus: false,
        malus: false,
        occupe: false
    }
]

let positionCases = document.getElementsByClassName("cases");
for (let i in positionCases){
    positionCases[i].style.bottom = plateau[i].positionY + 'px';
    positionCases[i].style.left = plateau[i].positionX + 'px';
}
