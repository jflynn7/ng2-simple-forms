import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UngroupedRadioQuestionComponent } from './ungrouped-radio-question.component';

describe('UngroupedRadioQuestionComponent', () => {
  let component: UngroupedRadioQuestionComponent;
  let fixture: ComponentFixture<UngroupedRadioQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UngroupedRadioQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UngroupedRadioQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
