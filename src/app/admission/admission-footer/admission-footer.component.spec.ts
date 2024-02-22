import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmissionFooterComponent } from './admission-footer.component';

describe('AdmissionFooterComponent', () => {
  let component: AdmissionFooterComponent;
  let fixture: ComponentFixture<AdmissionFooterComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
