import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterComponent } from './ajouter.component';

describe('AjouterComponent', () => {
  let component: AjouterComponent;
  let fixture: ComponentFixture<AjouterComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
