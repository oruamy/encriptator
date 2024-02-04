let input = document.querySelector('#clear');
let textarea = document.querySelector('#entrada');

input.addEventListener('click', function () {
  navigator.clipboard.writeText(textarea.value);
  textarea.value = '';
}, false);