let page = document.querySelector('.page');
page.classList.add('noanime');

let button = document.querySelector('.button');
button.onclick = function () {
    page.classList.toggle('noanime');
}


const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
  btn.innerHTML =
    (btn.innerHTML === 'стать аниме девочкой') ? btn.innerHTML = 'вернуться в реальность :(' : btn.innerHTML = 'стать аниме девочкой';
})

