import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Referentiel2TableComponent } from './referentiel2-table.component';

describe('Referentiel2TableComponent', () => {
  let component: Referentiel2TableComponent;
  let fixture: ComponentFixture<Referentiel2TableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Referentiel2TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Referentiel2TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
