import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UngroupedDropdownQuestionComponent } from './ungrouped-dropdown-question.component';

describe('UngroupedDropdownQuestionComponent', () => {
  let component: UngroupedDropdownQuestionComponent;
  let fixture: ComponentFixture<UngroupedDropdownQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UngroupedDropdownQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UngroupedDropdownQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
