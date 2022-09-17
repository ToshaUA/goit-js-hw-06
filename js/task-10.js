function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  boxesRef: document.querySelector('#boxes'),
  controlsRef: document.querySelector('#controls'),
};

const input = refs.controlsRef.querySelector('input');
const createBtnRef = refs.controlsRef.querySelector('[data-create]');
const destroyBtnRef = refs.controlsRef.querySelector('[data-destroy]');
let value = 20;

const createBoxes = amount => {
  const boxes = [];
  while (boxes.length < amount) {
    value += 10;
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = `${value}px`;
    box.style.width = `${value}px`;
    box.classList.add('box');

    boxes.push(box);
  }

  refs.boxesRef.append(...boxes);
};

const destroyBoxes = () => {
  const boxes = refs.boxesRef.querySelectorAll('.box');
  value = 20;
  for (const box of boxes) {
    box.remove();
  }
};

createBtnRef.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyBtnRef.addEventListener('click', () => {
  destroyBoxes();
});
