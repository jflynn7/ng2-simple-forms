import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFromJsonExamplePageComponent } from './form-from-json-example-page.component';

describe('FormFromJsonExamplePageComponent', () => {
  let component: FormFromJsonExamplePageComponent;
  let fixture: ComponentFixture<FormFromJsonExamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFromJsonExamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFromJsonExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
