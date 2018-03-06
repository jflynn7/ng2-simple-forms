import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedRadioQuestionComponent } from './grouped-radio-question.component';

describe('GroupedRadioQuestionComponent', () => {
  let component: GroupedRadioQuestionComponent;
  let fixture: ComponentFixture<GroupedRadioQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedRadioQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedRadioQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
