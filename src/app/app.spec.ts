import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'horus-360' title`, () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    // @ts-expect-error: protected property access for test
    expect(app.title).toEqual('horus-360');
  });
});
