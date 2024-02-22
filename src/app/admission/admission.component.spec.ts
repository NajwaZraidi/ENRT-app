import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmissionComponent } from './admission.component';

describe('AdmissionComponent', () => {
  let component: AdmissionComponent;
  let fixture: ComponentFixture<AdmissionComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
