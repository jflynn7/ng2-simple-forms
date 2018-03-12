import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentApiPageComponent } from './component-api-page.component';

describe('ComponentApiPageComponent', () => {
  let component: ComponentApiPageComponent;
  let fixture: ComponentFixture<ComponentApiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentApiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentApiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
