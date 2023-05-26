let btn = document.getElementById('push');
    btn.addEventListener('click',afficherRegles);
function afficherRegles() {
    let rules =document.getElementById('rules')
    rules.classList.remove('hidden')
}