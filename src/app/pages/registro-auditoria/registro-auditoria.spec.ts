import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAuditoria } from './registro-auditoria';

describe('RegistroAuditoria', () => {
  let component: RegistroAuditoria;
  let fixture: ComponentFixture<RegistroAuditoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroAuditoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAuditoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
