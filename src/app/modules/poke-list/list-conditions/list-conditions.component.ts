import { Component, OnInit } from '@angular/core';
import { PokeListService } from '../poke-list.service';

@Component({
  selector: 'app-list-conditions',
  templateUrl: './list-conditions.component.html',
  styleUrls: ['./list-conditions.component.scss'],
})
export class ListConditionsComponent implements OnInit {
  constructor(public pokeListService: PokeListService) {}

  ngOnInit(): void {}
}
