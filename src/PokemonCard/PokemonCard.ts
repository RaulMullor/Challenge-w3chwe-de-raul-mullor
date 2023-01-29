import Component from "../components/Component/Component.js";
import { getPokemonGallery } from "../pokemons/getPokemon.js";
import type { PokemonNameUrl } from "../pokemons/types.js";

export class PokemonCard extends Component {
  private readonly pokemon: PokemonNameUrl;

  constructor(parentElement: HTMLElement, pokemon: PokemonNameUrl) {
    super(parentElement, "card");
    this.pokemon = pokemon;
    this.render();
  }

  render(): void {
    const { name } = this.pokemon;
    const { url } = this.pokemon;
    this.domElement.innerHTML = `
      <h2>${name}</h2>
      <p>${url}</p>
    `;
    this.domElement.style.backgroundColor = "lightgray";
    this.domElement.style.padding = "20px";
    this.domElement.style.margin = "20px";
    this.domElement.style.width = "200px";
    this.domElement.style.display = "inline-block";
    super.render();
  }
}

export async function getPokemonCard() {
  const pokemonGallery = await getPokemonGallery();
  const pokemonCards = await Promise.all(
    pokemonGallery.results.map(
      async (PokemonNameUrl) => new PokemonCard(document.body, PokemonNameUrl)
    )
  );

  const cardContainer = new Component(document.body, "card-container");
  pokemonCards.forEach((card) => {
    card.render();
  });

  cardContainer.render();
}
