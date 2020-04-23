import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycarnetComponent } from './mycarnet.component';

describe('MycarnetComponent', () => {
  let component: MycarnetComponent;
  let fixture: ComponentFixture<MycarnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycarnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycarnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
