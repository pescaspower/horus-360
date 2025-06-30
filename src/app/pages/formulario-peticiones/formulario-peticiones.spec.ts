import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPeticiones } from './formulario-peticiones';

describe('FormularioPeticiones', () => {
  let component: FormularioPeticiones;
  let fixture: ComponentFixture<FormularioPeticiones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPeticiones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPeticiones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
