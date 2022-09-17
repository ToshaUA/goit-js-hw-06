const refs = {
  inputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.inputEl.addEventListener('input', newSize);
function newSize(element) {
  refs.textEl.style.fontSize = `${element.target.value}px`;
}
