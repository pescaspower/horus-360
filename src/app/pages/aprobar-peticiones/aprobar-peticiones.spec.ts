import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarPeticiones } from './aprobar-peticiones';

describe('AprobarPeticiones', () => {
  let component: AprobarPeticiones;
  let fixture: ComponentFixture<AprobarPeticiones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprobarPeticiones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprobarPeticiones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
