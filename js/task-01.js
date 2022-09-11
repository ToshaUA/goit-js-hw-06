const categoriesEl = document.querySelector('#categories');
const amountCategoriesEl = categoriesEl.children.length;
console.log(`Number of categories: ${amountCategoriesEl}`);
[...categoriesEl.children].forEach(element => {
  const categoriName = element.querySelector('h2').textContent;
  const amountEl = element.querySelectorAll('li').length;

  console.log(`Category: ${categoriName}`);
  console.log(`Elements: ${amountEl}`);
});
