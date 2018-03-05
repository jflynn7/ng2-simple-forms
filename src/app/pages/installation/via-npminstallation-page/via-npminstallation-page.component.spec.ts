import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaNpminstallationPageComponent } from './via-npminstallation-page.component';

describe('ViaNpminstallationPageComponent', () => {
  let component: ViaNpminstallationPageComponent;
  let fixture: ComponentFixture<ViaNpminstallationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViaNpminstallationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaNpminstallationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
