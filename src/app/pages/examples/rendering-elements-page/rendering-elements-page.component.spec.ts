import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingElementsPageComponent } from './rendering-elements-page.component';

describe('RenderingElementsPageComponent', () => {
  let component: RenderingElementsPageComponent;
  let fixture: ComponentFixture<RenderingElementsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderingElementsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderingElementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
