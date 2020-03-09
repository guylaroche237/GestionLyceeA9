import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdensgComponent } from './adensg.component';

describe('AdensgComponent', () => {
  let component: AdensgComponent;
  let fixture: ComponentFixture<AdensgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdensgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdensgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
