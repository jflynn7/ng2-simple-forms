import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedCheckboxQuestionComponent } from './grouped-checkbox-question.component';

describe('GroupedCheckboxQuestionComponent', () => {
  let component: GroupedCheckboxQuestionComponent;
  let fixture: ComponentFixture<GroupedCheckboxQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedCheckboxQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedCheckboxQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
