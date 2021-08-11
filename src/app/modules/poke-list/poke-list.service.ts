import { Injectable } from '@angular/core';
import { GamesPokemon, PokemonSimplified } from 'src/app/shared/models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeListService {
  listLoading: boolean;
  pokemonData = {} as PokemonSimplified;
  gamesAssociatePokemon: GamesPokemon[] = [];
  wasSearched: boolean;

  constructor() {
    this.listLoading = false;
    this.wasSearched = false;
  }
}
