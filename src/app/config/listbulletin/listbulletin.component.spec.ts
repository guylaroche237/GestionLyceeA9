import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbulletinComponent } from './listbulletin.component';

describe('ListbulletinComponent', () => {
  let component: ListbulletinComponent;
  let fixture: ComponentFixture<ListbulletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbulletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
