import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiReferencePageComponent } from './api-reference-page.component';

describe('ApiReferencePageComponent', () => {
  let component: ApiReferencePageComponent;
  let fixture: ComponentFixture<ApiReferencePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiReferencePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiReferencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
