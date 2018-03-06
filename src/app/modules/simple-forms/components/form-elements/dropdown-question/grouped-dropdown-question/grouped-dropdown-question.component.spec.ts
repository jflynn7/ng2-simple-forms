import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedDropdownQuestionComponent } from './grouped-dropdown-question.component';

describe('GroupedDropdownQuestionComponent', () => {
  let component: GroupedDropdownQuestionComponent;
  let fixture: ComponentFixture<GroupedDropdownQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedDropdownQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedDropdownQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
