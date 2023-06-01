let one = document.getElementById('unPoint');
let two = document.getElementById('deuxPoints');
let three = document.getElementById('troisPoints');
let four = document.getElementById('quatrePoints');


function choisirNbrPoints(){

		one.addEventListener('click',()=>{
		console.log(piocher(questions1point));
		});

		two.addEventListener('click',()=>{
		console.log(piocher(questions2points));
		});

		three.addEventListener('click',()=>{
		console.log(piocher(questions3points));
		});

		four.addEventListener('click',()=>{
		console.log(piocher(questions4points));
		});

}


choisirNbrPoints();