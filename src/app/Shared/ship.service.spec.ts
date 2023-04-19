import { TestBed } from '@angular/core/testing';

import { ShipService } from './ship.service';

describe('ShipService', () => {
  let service: ShipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
// <!-- /*
// * Author: Megyeri Márk Máté
// * Copyright: 2023, Megyeri Márk Máté
// * Group: Szoft V
// * Date: 2023-04-19
// * Github: https://github.com/megyerimark/
// * Licenc: GNU GPL
// */ -->