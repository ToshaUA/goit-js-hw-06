const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', newInput);

function newInput(element) {
  nameOutputEl.textContent = element.currentTarget.value;
  if (element.currentTarget.value === '') {
    nameOutputEl.textContent = 'Anonymous';
  }
}
