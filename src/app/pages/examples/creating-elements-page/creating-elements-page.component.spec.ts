import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingElementsPageComponent } from './creating-elements-page.component';

describe('CreatingElementsPageComponent', () => {
  let component: CreatingElementsPageComponent;
  let fixture: ComponentFixture<CreatingElementsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingElementsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingElementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
