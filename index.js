import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = data.info.pages;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();
  //data.results is an array of objects with character data
  return data.results;
  return data.info;
}

function renderCards(characters) {
  cardContainer.innerHTML = "";
  characters.forEach((character) => {
    const card = CharacterCard(character);
    cardContainer.append(card);
  });
}

nextButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (page === maxPage) {
    return;
  } else {
    page++;
    fetchAndRender();
    pagination.innerHTML = `${page} / ${maxPage}`;
  }
});

prevButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (page === 1) {
    return;
  } else {
    page--;
    fetchAndRender();
    pagination.innerHTML = `${page} / ${maxPage}`;
  }
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  searchQuery = data.query;
  console.log(searchQuery);

  fetchAndRender();
});

// ----------------------------------------------------------------------------------

// Runung from here down.
async function fetchAndRender() {
  const charactersArray = await fetchCharacters();
  renderCards(charactersArray);
}

fetchAndRender();
