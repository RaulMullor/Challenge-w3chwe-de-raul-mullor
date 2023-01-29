import { PageComponent } from "./components/PageComponent/PageComponent.js";
import HeaderComponent from "./HeaderComponent/HeaderComponent.js";
import { getPokemonCard } from "./PokemonCard/PokemonCard.js";

import { getPokemonGallery } from "./pokemons/getPokemon.js";

(async () => {
  await getPokemonGallery();
})();

const page = new PageComponent(document.body);
page.render();

const header = new HeaderComponent(page.domElement);
header.render();

async function pokemonCard() {
  await getPokemonCard();
}

const pokemonContainer = document.createElement("div");
pokemonContainer.id = "pokemon-container";

document.body.appendChild(pokemonContainer);

getPokemonCard()
  .then(() => {})
  .catch(() => {});
