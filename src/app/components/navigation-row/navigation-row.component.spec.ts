import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationRowComponent } from './navigation-row.component';

describe('NavigationRowComponent', () => {
  let component: NavigationRowComponent;
  let fixture: ComponentFixture<NavigationRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
