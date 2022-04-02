import './styles.css';

import soupIcon from './soup.png';

const contentDiv = document.querySelector('#content');

const headerElement = document.createElement('header');
headerElement.id = 'header';

const logoElement = document.createElement('img');
logoElement.id = 'site-logo';
logoElement.src = soupIcon;
logoElement.alt = 'restaurant logo, soup';

const navElement = document.createElement('nav');
navElement.id = 'nav';

const homeButton = document.createElement('button');
homeButton.id = 'home-button';
homeButton.classList.add('nav-button');
homeButton.textContent = 'HOME';
const recipesButton = document.createElement('button');
recipesButton.id = 'recipes-button';
recipesButton.classList.add('nav-button');
recipesButton.textContent = 'RECIPES';
const contactButton = document.createElement('button');
contactButton.id = 'contact-button';
contactButton.classList.add('nav-button');
contactButton.textContent = 'CONTACT';

navElement.appendChild(homeButton);
navElement.appendChild(recipesButton);
navElement.appendChild(contactButton);

headerElement.appendChild(logoElement);
headerElement.appendChild(navElement);

contentDiv.appendChild(headerElement);
