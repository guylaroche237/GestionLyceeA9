import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatierecompoComponent } from './matierecompo.component';

describe('MatierecompoComponent', () => {
  let component: MatierecompoComponent;
  let fixture: ComponentFixture<MatierecompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatierecompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatierecompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
