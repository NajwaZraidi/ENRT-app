import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionBodyComponent } from './admission-body.component';

describe('AdmissionBodyComponent', () => {
  let component: AdmissionBodyComponent;
  let fixture: ComponentFixture<AdmissionBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmissionBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmissionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
