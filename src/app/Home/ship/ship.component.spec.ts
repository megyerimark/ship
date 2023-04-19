import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipComponent } from './ship.component';

describe('ShipComponent', () => {
  let component: ShipComponent;
  let fixture: ComponentFixture<ShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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