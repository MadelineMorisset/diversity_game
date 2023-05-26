// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (exclue).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


let numeroQuestion;

function piocher(questionPoint){
  let nbrQuestions = questionPoint.length;
  numeroQuestion = getRandomInt(1,nbrQuestions+1);
  return numeroQuestion;
}



console.log(piocher(questions1point));
