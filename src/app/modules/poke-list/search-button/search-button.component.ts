import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';
import { Pokemon, PokemonSimplified } from 'src/app/shared/models/pokemon';
import { PokeListService } from '../poke-list.service';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss'],
})
export class SearchButtonComponent implements OnInit {
  pokemonName: string;

  constructor(
    private pokemonService: PokemonService,
    private pokeListService: PokeListService
  ) {
    this.pokemonName = '';
  }

  ngOnInit(): void {}

  getPokemonDetails() {
    const stopLoading = () => {
      this.pokeListService.listLoading = false;
    };

    const runLoading = () => {
      this.pokeListService.listLoading = true;
    };
    const pokemonNameModify = this.pokemonName.toLocaleLowerCase();

    runLoading();
    this.pokeListService.wasSearched = true;
    this.pokemonService.getPokemonDetails(pokemonNameModify).subscribe(
      (response) => {
        let pokemonDataComplete = {} as Pokemon;
        pokemonDataComplete = response;
        this.adaptModelAndFillData(pokemonDataComplete);
        stopLoading();
      },
      (error: HttpErrorResponse) => {
        stopLoading();
        this.pokeListService.pokemonData = {} as PokemonSimplified;
      }
    );
  }

  adaptModelAndFillData(pokemonDataComplete: Pokemon) {
    this.pokeListService.pokemonData.base_experience =
      pokemonDataComplete.base_experience;
    this.pokeListService.pokemonData.base_stat =
      pokemonDataComplete.stats[0].base_stat;
    this.pokeListService.pokemonData.gamesLength =
      pokemonDataComplete.game_indices.length;
    this.pokeListService.pokemonData.image =
      pokemonDataComplete.sprites.other['official-artwork'].front_default;
    this.pokeListService.pokemonData.movesLength =
      pokemonDataComplete.moves.length;
    this.pokeListService.pokemonData.name = pokemonDataComplete.forms[0].name;
    this.pokeListService.pokemonData.type =
      pokemonDataComplete.types[0].type.name;
    this.pokeListService.gamesAssociatePokemon =
      pokemonDataComplete.game_indices;
  }
}
