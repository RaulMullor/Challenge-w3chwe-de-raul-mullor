export interface PokemonNameUrl {
  id: any;
  name: string;
  url: string;
}

export interface PokemonGallery {
  next: string;
  results: PokemonNameUrl[];
}
