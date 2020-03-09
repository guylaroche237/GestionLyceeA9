import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcompoComponent } from './adcompo.component';

describe('AdcompoComponent', () => {
  let component: AdcompoComponent;
  let fixture: ComponentFixture<AdcompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdcompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
