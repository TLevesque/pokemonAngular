import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Pokemon } from './poke-pokemon-class';

@Injectable()
export class PokeApiServiceService {
  private baseURL: string = "http://pokeapi.co/api/v2/";

  constructor(private http: Http) { }

  getPokemons(): Promise<Pokemon[]> {
  return this.http.get(`${this.baseURL}pokemon`)
    .toPromise()
    .then(response => {
      return response.json().results.map((pokemon) => {
        return Pokemon.parse(pokemon)
      })
    })
    .catch(this.handleError)
}

getPokemonById(id: number): Promise<Pokemon> {
  return this.http.get(`${this.baseURL}pokemon/${id}`)
    .toPromise()
    .then(response => {
      console.log('response by id', response);
      return Pokemon.parse(response.json());
    })
    .catch(this.handleError)
}

getPokemonByName(name: string): Promise<Pokemon> {
    name = name.toLowerCase();
    return this.http.get(`${this.baseURL}pokemon/${name}`)
      .toPromise()
      .then(response => {
        console.log('json in by name search', response.json());
        return Pokemon.parse(response.json());
      })
      .catch(this.handleError)
  }

// getPokemonsFromSearch(searchTerm: string): Promise<Pokemon> {
  //   console.log('searchTerm',searchTerm);
  //   // const result = this.getPokemonByName(searchTerm);
  //   // console.log('result',result);
  //   // return result;
  // }

  private handleError(error: any): Promise<any> {
    debugger;
    console.error('An error occurred:', error.statusText);
    return Promise.reject(error.statusText || error);
  }

}
