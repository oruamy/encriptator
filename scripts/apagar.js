let input = document.querySelector('#clear');
let textarea = document.querySelector('#entrada');

input.addEventListener('click', function apagar() {
  let audio = new Audio("./assets/complete.wav");
  audio.play();

  navigator.clipboard.writeText(textarea.value);
  textarea.value = '';
}, false);
