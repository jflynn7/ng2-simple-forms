import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupsPageComponent } from './form-groups-page.component';

describe('FormGroupsPageComponent', () => {
  let component: FormGroupsPageComponent;
  let fixture: ComponentFixture<FormGroupsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
