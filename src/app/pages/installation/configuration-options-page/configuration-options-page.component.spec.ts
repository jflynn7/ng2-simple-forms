import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationOptionsPageComponent } from './configuration-options-page.component';

describe('ConfigurationOptionsPageComponent', () => {
  let component: ConfigurationOptionsPageComponent;
  let fixture: ComponentFixture<ConfigurationOptionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationOptionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationOptionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
