import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdpubComponent } from './adpub.component';

describe('AdpubComponent', () => {
  let component: AdpubComponent;
  let fixture: ComponentFixture<AdpubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdpubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
