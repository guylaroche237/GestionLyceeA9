import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmatiereComponent } from './admatiere.component';

describe('AdmatiereComponent', () => {
  let component: AdmatiereComponent;
  let fixture: ComponentFixture<AdmatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
