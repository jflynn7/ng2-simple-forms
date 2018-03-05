import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaModulesInstallationPageComponent } from './via-modules-installation-page.component';

describe('ViaModulesInstallationPageComponent', () => {
  let component: ViaModulesInstallationPageComponent;
  let fixture: ComponentFixture<ViaModulesInstallationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViaModulesInstallationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaModulesInstallationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
