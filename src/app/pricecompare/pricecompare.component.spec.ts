import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricecompareComponent } from './pricecompare.component';

describe('PricecompareComponent', () => {
  let component: PricecompareComponent;
  let fixture: ComponentFixture<PricecompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricecompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricecompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
