import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFormGroupExamplePageComponent } from './no-form-group-example-page.component';

describe('NoFormGroupExamplePageComponent', () => {
  let component: NoFormGroupExamplePageComponent;
  let fixture: ComponentFixture<NoFormGroupExamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoFormGroupExamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFormGroupExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
