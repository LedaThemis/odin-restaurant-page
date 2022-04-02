const recipesDiv = document.createElement('div');

const ul = document.createElement('ul');

const hamburgerRecipe = document.createElement('li');
hamburgerRecipe.textContent = 'Hamburger';

const cheeseHamburgerRecipe = document.createElement('li');
cheeseHamburgerRecipe.textContent = 'Cheese Hamburger';

const saladRecipe = document.createElement('li');
saladRecipe.textContent = 'Salad';

ul.appendChild(hamburgerRecipe);
ul.appendChild(cheeseHamburgerRecipe);
ul.appendChild(saladRecipe);

recipesDiv.appendChild(ul);

export { recipesDiv };
