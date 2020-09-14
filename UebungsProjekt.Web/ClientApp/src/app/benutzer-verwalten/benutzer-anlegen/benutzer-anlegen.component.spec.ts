import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenutzerAnlegenComponent } from './benutzer-anlegen.component';

describe('BenutzerAnlegenComponent', () => {
  let component: BenutzerAnlegenComponent;
  let fixture: ComponentFixture<BenutzerAnlegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenutzerAnlegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenutzerAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
