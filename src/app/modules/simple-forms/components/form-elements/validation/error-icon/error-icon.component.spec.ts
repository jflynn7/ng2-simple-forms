import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorIconComponent } from './error-icon.component';

describe('ErrorIconComponent', () => {
  let component: ErrorIconComponent;
  let fixture: ComponentFixture<ErrorIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
