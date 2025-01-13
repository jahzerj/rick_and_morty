import { CharacterCard } from './components/CharacterCard/CharacterCard.js';
import { createNavButtons } from './components/NavButton/NavButton.js';
import { createNavPagination } from './components/NavPagination/NavPagination.js';
import { createSearchBar } from './components/SearchBar/SearchBar.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 42; //Max Pages
let page = 1; // Current Page
let searchQuery = '';

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();
  //data.results is an array of objects with character data
  maxPage = data.info.pages;
  paginationElement.innerHTML = `${page} / ${maxPage}`;
  return data.results;
}

function renderCards(characters) {
  cardContainer.innerHTML = '';
  characters.forEach((character) => {
    const card = CharacterCard(character);
    cardContainer.append(card);
  });
}

//updates page number
function updatePagination() {
  const pagination = document.querySelector('[data-js="pagination"]');
  paginationElement.textContent = `${page} / ${maxPage}`;
}

// Create and append navigation elements/search bar
const { prevButton, nextButton } = createNavButtons();
const paginationElement = createNavPagination(page, maxPage);
const searchBar = createSearchBar();

navigation.appendChild(prevButton);
navigation.appendChild(nextButton);
navigation.appendChild(paginationElement);
searchBarContainer.appendChild(searchBar);

// Add event listeners to the buttons------------------------------------------------------------------------
prevButton.addEventListener('click', (event) => {
  if (page > 1) {
    page--;
    fetchAndRender();
  }
});

nextButton.addEventListener('click', (event) => {
  if (page < maxPage) {
    page++;
    fetchAndRender();
  }
});

searchBar.addEventListener('submit', (event) => {
  event.preventDefault();
  page = 1;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  searchQuery = data.query;
  fetchAndRender();
  searchBar.reset();
});

// ----------------------------------------------------------------------------------

// Running from here down.
async function fetchAndRender() {
  const charactersArray = await fetchCharacters();
  renderCards(charactersArray);
  updatePagination();
}

fetchAndRender();
