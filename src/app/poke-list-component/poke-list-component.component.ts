import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../poke-pokemon-class';
import { PokeApiServiceService } from '../poke-api-service.service';

@Component({
  selector: 'app-poke-list-component',
  templateUrl: './poke-list-component.component.html',
  styleUrls: ['./poke-list-component.component.css'],
  providers: [ PokeApiServiceService ]
})

export class PokeListComponentComponent implements OnInit {
  @Input()
  type: string;
  @Input()
  pokemon: Pokemon;
  pokemonList: Pokemon[];
  errMsg: string;

  constructor(private client: PokeApiServiceService) {
  }

  ngOnInit() {
    this.client.getPokemons()
      .then(pokemons => this.pokemonList = pokemons)
      .catch(err => this.errMsg = err.message )
    }
}
