const myInput = document.querySelector('#validation-input');
myInput.addEventListener('blur', onBlur);
function onBlur(element) {
  const inputRef = element.currentTarget;
  const inputLength = Number(inputRef.dataset.length);
  if (inputRef.value.length === inputLength) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}
