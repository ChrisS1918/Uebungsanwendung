import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseAnlegenComponent } from './adresse-anlegen.component';

describe('AdresseAnlegenComponent', () => {
  let component: AdresseAnlegenComponent;
  let fixture: ComponentFixture<AdresseAnlegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseAnlegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
