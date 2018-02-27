import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementBaseComponent } from './element-base.component';

describe('ElementBaseComponent', () => {
  let component: ElementBaseComponent;
  let fixture: ComponentFixture<ElementBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
