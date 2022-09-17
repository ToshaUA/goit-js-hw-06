let counterValue = 0;
const decremetBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const valueLabel = document.querySelector('#value');

const countDecr = function () {
  counterValue -= 1;
  valueLabel.textContent = counterValue;
};

const countIncr = function () {
  counterValue += 1;
  valueLabel.textContent = counterValue;
};

decremetBtn.addEventListener('click', countDecr);
incrementBtn.addEventListener('click', countIncr);
