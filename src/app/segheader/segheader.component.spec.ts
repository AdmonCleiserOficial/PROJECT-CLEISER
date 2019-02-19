import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegheaderComponent } from './segheader.component';

describe('SegheaderComponent', () => {
  let component: SegheaderComponent;
  let fixture: ComponentFixture<SegheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
