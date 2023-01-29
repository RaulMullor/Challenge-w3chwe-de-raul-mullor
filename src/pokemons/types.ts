export interface PokemonNameUrl {
  name: string;
  url: string;
}

export interface PokemonGallery {
  next: string;
  results: PokemonNameUrl[];
}
