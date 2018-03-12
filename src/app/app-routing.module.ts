import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NoFormGroupExamplePageComponent } from './pages/examples/no-form-group-example-page/no-form-group-example-page.component';
import { UnwrappedFormExamplePageComponent } from './pages/examples/unwrapped-form-example-page/unwrapped-form-example-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ViaNpminstallationPageComponent } from './pages/installation/via-npminstallation-page/via-npminstallation-page.component';
import { ViaModulesInstallationPageComponent } from './pages/installation/via-modules-installation-page/via-modules-installation-page.component';
import { CreatingElementsPageComponent } from './pages/examples/creating-elements-page/creating-elements-page.component';
import { WrappedFormExamplePageComponent } from './pages/examples/wrapped-form-example-page/wrapped-form-example-page.component';
import { FormFromJsonExamplePageComponent } from './pages/examples/form-from-json-example-page/form-from-json-example-page.component';
import { FormGroupsPageComponent } from './pages/examples/form-groups-page/form-groups-page.component';
import { RenderingElementsPageComponent } from './pages/examples/rendering-elements-page/rendering-elements-page.component';
import { ApiReferencePageComponent } from './pages/api-reference-page/api-reference-page.component';
import { AccessibilityPageComponent } from './pages/accessibility-page/accessibility-page.component';
import { TestingPageComponent } from './pages/testing-page/testing-page.component';
import { ConfigurationOptionsPageComponent } from './pages/installation/configuration-options-page/configuration-options-page.component';
import { ElementPropertiesPageComponent } from './pages/installation/element-properties-page/element-properties-page.component';
import { StyleGuidePageComponent } from './pages/theming/style-guide-page/style-guide-page.component';
import { CsshelpersPageComponent } from './pages/theming/csshelpers-page/csshelpers-page.component';
import { ComponentApiPageComponent } from './pages/component-api-page/component-api-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'via-npm',
    component: ViaNpminstallationPageComponent
  },
  {
    path: 'via-modules',
    component: ViaModulesInstallationPageComponent
  },
  {
    path: 'creating-elements',
    component: CreatingElementsPageComponent,
  },
  {
    path: 'formgroups',
    component: FormGroupsPageComponent,
  },
  {
    path: 'rendering-elements',
    component: RenderingElementsPageComponent
  },
  {
    path: 'wrapped-form',
    component: WrappedFormExamplePageComponent
  },
  {
    path: 'from-json',
    component: FormFromJsonExamplePageComponent
  },
  {
    path: 'unwrapped-form',
    component: UnwrappedFormExamplePageComponent
  },
  {
    path: 'without-formgroup',
    component: NoFormGroupExamplePageComponent
  },
  {
    path: 'api/:object',
    component: ApiReferencePageComponent
  },
  {
    path: 'api',
    component: ApiReferencePageComponent
  },
  {
    path: 'components/:object',
    component: ComponentApiPageComponent
  },
  {
    path: 'components',
    component: ComponentApiPageComponent
  },
  {
    path: 'accessibility',
    component: AccessibilityPageComponent
  },
  {
    path: 'testing',
    component: TestingPageComponent
  },
  {
    path: 'configuration',
    component: ConfigurationOptionsPageComponent
  },
  {
    path: 'properties',
    component: ElementPropertiesPageComponent
  },
  {
    path: 'style-guide',
    component: StyleGuidePageComponent
  },
  {
    path: 'css-helpers',
    component: CsshelpersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
