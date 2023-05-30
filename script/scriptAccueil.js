let btn = document.getElementById('push');
    btn.addEventListener('click',afficherRegles);
    let rules =document.getElementById('rules');
function afficherRegles() {
    rules.classList.remove('hidden')
}
let btn2 = document.getElementById('hide');
    btn2.addEventListener('click',cacherRegles);
function cacherRegles() {
    
    rules.classList.add('hidden')
}