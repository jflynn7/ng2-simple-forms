import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationContainerComponent } from './validation-container.component';

describe('ValidationContainerComponent', () => {
  let component: ValidationContainerComponent;
  let fixture: ComponentFixture<ValidationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
