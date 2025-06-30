import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPeticiones } from './mis-peticiones';

describe('MisPeticiones', () => {
  let component: MisPeticiones;
  let fixture: ComponentFixture<MisPeticiones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisPeticiones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisPeticiones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
