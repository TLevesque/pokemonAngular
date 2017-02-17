/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokeApiServiceService } from './poke-api-service.service';

describe('PokeApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeApiServiceService]
    });
  });

  it('should ...', inject([PokeApiServiceService], (service: PokeApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
