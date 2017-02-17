import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PokeListComponentComponent } from './poke-list-component/poke-list-component.component';
import { PokeItemComponentComponent } from './poke-item-component/poke-item-component.component';
import { PokeHeaderComponentComponent } from './poke-header-component/poke-header-component.component';
import { PokeSearchComponentComponent } from './poke-search-component/poke-search-component.component';
import { PokeDetailComponentComponent } from './poke-detail-component/poke-detail-component.component';

import { PokeApiServiceService } from './poke-api-service.service';
import { Pokemon } from './poke-pokemon-class';


@NgModule({
  declarations: [
    AppComponent,
    PokeListComponentComponent,
    PokeItemComponentComponent,
    PokeHeaderComponentComponent,
    PokeSearchComponentComponent,
    PokeDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PokeListComponentComponent
      },
      {
        path: 'pokemon/:pokemonId',
        component: PokeDetailComponentComponent
      }
    ])
  ],
  providers: [PokeApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
