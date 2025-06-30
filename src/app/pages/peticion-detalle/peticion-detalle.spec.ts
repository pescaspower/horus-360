import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { PeticionDetalle } from './peticion-detalle';

describe('PeticionDetalle', () => {
  let component: PeticionDetalle;
  let fixture: ComponentFixture<PeticionDetalle>;
  const fakeActivatedRoute = {
    snapshot: {
      paramMap: {
        get: (key: string) => '123', // Proporcionamos un ID de prueba
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeticionDetalle],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeticionDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
