const homeDiv = document.createElement('main');
homeDiv.id = 'main';

const h1 = document.createElement('h1');
h1.textContent = 'Welcome to the most awesome restaurant website!';

homeDiv.appendChild(h1);

export { homeDiv };
