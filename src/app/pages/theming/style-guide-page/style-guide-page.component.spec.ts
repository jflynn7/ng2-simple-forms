import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleGuidePageComponent } from './style-guide-page.component';

describe('StyleGuidePageComponent', () => {
  let component: StyleGuidePageComponent;
  let fixture: ComponentFixture<StyleGuidePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleGuidePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleGuidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
