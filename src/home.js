const mainDiv = document.createElement('main');
mainDiv.id = 'main';

const h1 = document.createElement('h1');
h1.textContent = 'Welcome to the most awesome restaurant website!';

mainDiv.appendChild(h1);

export { mainDiv };
