import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbucketComponent } from './inbucket.component';

describe('InbucketComponent', () => {
  let component: InbucketComponent;
  let fixture: ComponentFixture<InbucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
