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
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch characters: ${response.status}`);
    }

    const data = await response.json();

    if (!data.info || !data.results || data.results.length === 0) {
      maxPage = 0; //set maxPage to 0 when nothing is found
      paginationElement.innerHTML = `0 / 0`;
      cardContainer.innerHTML = `<p>No data available for the query: "${searchQuery}"</p>`;
      return []; //Returns an empty array so that all array methods still work
    }

    //Change page numbers for each request
    maxPage = data.info.pages;
    paginationElement.innerHTML = `${page} / ${maxPage}`;
    return data.results;
    //data.results is an array of objects with character data
  } catch (error) {
    console.error(`Error fetching characters:`, error.message);
    maxPage = 0;
    page = 0;
    paginationElement.innerHTML = `0 / 0`; //makes page count 0/0
    cardContainer.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
    return []; //Returns an empty array so that all array methods still work
  }
}
// throw new Error(`No data available for the query: "${searchQuery}"`);

function renderCards(characters) {
  cardContainer.innerHTML = '';
  characters.forEach((character) => {
    const card = CharacterCard(character);
    cardContainer.append(card);
  });
}

//updates page number
function updatePagination() {
  paginationElement.textContent = `${page} / ${maxPage}`;
}

// Create and append navigation elements/search bar
const { prevButton, nextButton } = createNavButtons();
const paginationElement = createNavPagination(page, maxPage);
const searchBar = createSearchBar();

navigation.appendChild(prevButton);
navigation.appendChild(paginationElement);
navigation.appendChild(nextButton);
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

  //If no characters are returned, exit early
  if (charactersArray.length === 0) {
    return; //Skip rendering cards
  }

  renderCards(charactersArray);
  updatePagination();
}

fetchAndRender();
