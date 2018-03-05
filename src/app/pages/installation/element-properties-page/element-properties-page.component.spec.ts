import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementPropertiesPageComponent } from './element-properties-page.component';

describe('ElementPropertiesPageComponent', () => {
  let component: ElementPropertiesPageComponent;
  let fixture: ComponentFixture<ElementPropertiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementPropertiesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementPropertiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
