import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechnungErstellenComponent } from './rechnung-erstellen.component';

describe('RechnungErstellenComponent', () => {
  let component: RechnungErstellenComponent;
  let fixture: ComponentFixture<RechnungErstellenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechnungErstellenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechnungErstellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
