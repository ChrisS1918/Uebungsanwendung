import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadKundenComponent } from './read-kunden.component';

describe('ReadKundenComponent', () => {
  let component: ReadKundenComponent;
  let fixture: ComponentFixture<ReadKundenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadKundenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadKundenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
