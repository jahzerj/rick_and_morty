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

function CharacterCards() {
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML = `<div class="card__image-container">
            <img
              class="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg";
              alt="Rick Sanchez"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">Rick</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">Alive</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description"></dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">51</dd>
            </dl>
          </div>`;
  //return card;
  cardContainer.append(card);
}
CharacterCards();
