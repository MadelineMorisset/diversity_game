function ecranVictoire() {
  let ecranVictoire = document.getElementById('ecranVictoire');
  ecranVictoire.style.display = 'block';

  let elem = document.getElementById('background-video')
  let titre = document.getElementById('h1')

  setTimeout( () => {
      h1.style.fontSize = "100px"
      elem.style.display = 'block'
  }, 4000)

  const btn = document.querySelector('#btn');
  const canvas = document.querySelector('#confetti-canvas');
  function confettis(){
    var myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true
    });
    myConfetti({
      particleCount: 300,
      spread: 300
    });

    var myConfetti2 = confetti.create(canvas, {
      resize: true,
      useWorker: true
    });

    myConfetti2({
      particleCount: 300,
      spread: 300
    });
  }

  confettis();
  setInterval(confettis, 2000)
}