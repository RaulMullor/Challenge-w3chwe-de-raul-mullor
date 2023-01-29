import type { PokemonGallery } from "./types.js";

export const getPokemonGallery = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const pokemonGallery = (await response.json()) as PokemonGallery;

  return pokemonGallery;
};
