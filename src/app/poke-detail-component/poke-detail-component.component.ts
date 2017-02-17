import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PokeApiServiceService } from '../poke-api-service.service';
import { Pokemon } from '../poke-pokemon-class';

@Component({
  selector: 'app-poke-detail-component',
  templateUrl: './poke-detail-component.component.html',
  styleUrls: ['./poke-detail-component.component.css'],
  providers: [ PokeApiServiceService ]
})
export class PokeDetailComponentComponent implements OnInit {
pokemon: Pokemon = new Pokemon();

  constructor(
    private route: ActivatedRoute,
    private client: PokeApiServiceService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let pokemonId = +params['pokemonId'];
      this.client.getPokemonById(pokemonId)
        .then(pokemon => {
          console.log('pokemon', pokemon);
          this.pokemon = pokemon;
        });
      })
    }

}
