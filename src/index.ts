import { PageComponent } from "./components/PageComponent/PageComponent.js";
import HeaderComponent from "./HeaderComponent/HeaderComponent.js";

import { getPokemonGallery } from "./pokemons/getPokemon.js";

(async () => {
  await getPokemonGallery();
})();

const page = new PageComponent(document.body);
page.render();

const header = new HeaderComponent(page.domElement);
header.render();
