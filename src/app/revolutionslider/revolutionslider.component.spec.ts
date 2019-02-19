import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevolutionsliderComponent } from './revolutionslider.component';

describe('RevolutionsliderComponent', () => {
  let component: RevolutionsliderComponent;
  let fixture: ComponentFixture<RevolutionsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevolutionsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevolutionsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
