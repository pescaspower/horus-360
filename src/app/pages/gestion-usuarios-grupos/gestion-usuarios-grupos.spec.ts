import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUsuariosGrupos } from './gestion-usuarios-grupos';

describe('GestionUsuariosGrupos', () => {
  let component: GestionUsuariosGrupos;
  let fixture: ComponentFixture<GestionUsuariosGrupos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionUsuariosGrupos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionUsuariosGrupos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
