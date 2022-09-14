const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const elements = ingredients.map(element => {
  const newEL = document.createElement('li');
  newEL.classList.add('item');
  newEL.textContent = element;
  return newEL;
});
const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...elements);
