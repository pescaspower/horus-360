import { ComponentFixture, TestBed } from '@angular/core/testing';


import { AyudaFaq } from './ayuda-faq';

describe('AyudaFaq', () => {
  let component: AyudaFaq;
  let fixture: ComponentFixture<AyudaFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AyudaFaq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyudaFaq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
