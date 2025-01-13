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
const maxPage = 1;
const page = 1;
const searchQuery = "";
// const url = "https://rickandmortyapi.com/api";

async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  console.log(data);
  const charactersObject = data.results;
  console.log(charactersObject);
  return charactersObject;

  // console.log(
  //   data.results[0].image,
  //   data.results[0].name,
  //   data.results[0].status,
  //   data.results[0].type,
  //   data.results[0].episode.length
  // );
}

fetchCharacters();
