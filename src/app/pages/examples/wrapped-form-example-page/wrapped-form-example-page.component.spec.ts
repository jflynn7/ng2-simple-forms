import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappedFormExamplePageComponent } from './wrapped-form-example-page.component';

describe('WrappedFormExamplePageComponent', () => {
  let component: WrappedFormExamplePageComponent;
  let fixture: ComponentFixture<WrappedFormExamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrappedFormExamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrappedFormExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
