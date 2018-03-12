import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkWithSubComponent } from './link-with-sub.component';

describe('LinkWithSubComponent', () => {
  let component: LinkWithSubComponent;
  let fixture: ComponentFixture<LinkWithSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkWithSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkWithSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
