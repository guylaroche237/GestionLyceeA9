import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirbullComponent } from './voirbull.component';

describe('VoirbullComponent', () => {
  let component: VoirbullComponent;
  let fixture: ComponentFixture<VoirbullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirbullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirbullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
