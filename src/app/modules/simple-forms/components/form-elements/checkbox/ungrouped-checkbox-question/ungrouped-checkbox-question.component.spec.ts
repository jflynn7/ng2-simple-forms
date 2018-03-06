import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UngroupedCheckboxQuestionComponent } from './ungrouped-checkbox-question.component';

describe('UngroupedCheckboxQuestionComponent', () => {
  let component: UngroupedCheckboxQuestionComponent;
  let fixture: ComponentFixture<UngroupedCheckboxQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UngroupedCheckboxQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UngroupedCheckboxQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
