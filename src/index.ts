import { PageComponent } from "./components/PageComponent/PageComponent.js";
import { getPokemonGallery } from "./pokemons/getPokemon.js";

(async () => {
  console.log(await getPokemonGallery());
})();

const page = new PageComponent(document.body);
page.render();
