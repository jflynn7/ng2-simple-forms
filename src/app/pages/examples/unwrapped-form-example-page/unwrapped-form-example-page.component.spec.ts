import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnwrappedFormExamplePageComponent } from './unwrapped-form-example-page.component';

describe('UnwrappedFormExamplePageComponent', () => {
  let component: UnwrappedFormExamplePageComponent;
  let fixture: ComponentFixture<UnwrappedFormExamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnwrappedFormExamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnwrappedFormExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
