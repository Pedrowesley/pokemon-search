import { Component, Input, OnInit } from '@angular/core';
import { GamesPokemon, PokemonSimplified } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss'],
})
export class ListGamesComponent implements OnInit {
  @Input() pokemonData = {} as PokemonSimplified;
  @Input() games: GamesPokemon[] = [];

  constructor() {}

  ngOnInit(): void {}
}
