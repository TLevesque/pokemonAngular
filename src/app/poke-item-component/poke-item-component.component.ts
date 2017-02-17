import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../poke-pokemon-class';

@Component({
  selector: 'app-poke-item-component',
  templateUrl: './poke-item-component.component.html',
  styleUrls: ['./poke-item-component.component.css'],
  // providers: [ PokeApiServiceService ]
})
export class PokeItemComponentComponent implements OnInit {
  @Input()
  pokemon: Pokemon;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToPokemon(){
    this.router.navigate(['/pokemon', this.pokemon.id])
  }
}
