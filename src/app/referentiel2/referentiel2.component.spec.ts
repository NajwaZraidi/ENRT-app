import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Referentiel2Component } from './referentiel2.component';

describe('Referentiel2Component', () => {
  let component: Referentiel2Component;
  let fixture: ComponentFixture<Referentiel2Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Referentiel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Referentiel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
