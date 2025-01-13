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
const maxPage = 42;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const data = await response.json();
  //data.results is an array of objects with character data
  return data.results;
}

function renderCards(characters) {
  cardContainer.innerHTML = "";
  console.log(characters);
  characters.forEach((character) => {
    const card = CharacterCard(character);
    cardContainer.append(card);
  });
};


// ----------------------------------------------------------------------------------

// Runung from here down.
const charactersArray = await fetchCharacters();
renderCards(charactersArray);
