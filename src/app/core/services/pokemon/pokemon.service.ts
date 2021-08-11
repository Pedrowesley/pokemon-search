import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  getPokemonDetails(pokemonName: string) {
    return this.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  }
}
