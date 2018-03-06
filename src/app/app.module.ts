import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleFormsModule } from './modules/simple-forms/simple-forms.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { WrappedFormExamplePageComponent } from './pages/examples/wrapped-form-example-page/wrapped-form-example-page.component';
import { UnwrappedFormExamplePageComponent } from './pages/examples/unwrapped-form-example-page/unwrapped-form-example-page.component';
import { NoFormGroupExamplePageComponent } from './pages/examples/no-form-group-example-page/no-form-group-example-page.component';
import { FormFromJsonExamplePageComponent } from './pages/examples/form-from-json-example-page/form-from-json-example-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LinkComponent } from './components/link/link.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreatingElementsPageComponent } from './pages/examples/creating-elements-page/creating-elements-page.component';
import { ViaNpminstallationPageComponent } from './pages/installation/via-npminstallation-page/via-npminstallation-page.component';
import { ViaModulesInstallationPageComponent } from './pages/installation/via-modules-installation-page/via-modules-installation-page.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { RenderingElementsPageComponent } from './pages/examples/rendering-elements-page/rendering-elements-page.component';
import { FormGroupsPageComponent } from './pages/examples/form-groups-page/form-groups-page.component';
import { ApiReferencePageComponent } from './pages/api-reference-page/api-reference-page.component';
import { NavigationRowComponent } from './components/navigation-row/navigation-row.component';
import { HttpClientModule } from '@angular/common/http';
import { AccessibilityPageComponent } from './pages/accessibility-page/accessibility-page.component';
import { TestingPageComponent } from './pages/testing-page/testing-page.component';
import { ConfigurationOptionsPageComponent } from './pages/installation/configuration-options-page/configuration-options-page.component';
import { ElementPropertiesPageComponent } from './pages/installation/element-properties-page/element-properties-page.component';
import { StyleGuidePageComponent } from './pages/theming/style-guide-page/style-guide-page.component';
import { CsshelpersPageComponent } from './pages/theming/csshelpers-page/csshelpers-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UnwrappedFormExamplePageComponent,
    WrappedFormExamplePageComponent,
    NoFormGroupExamplePageComponent,
    FormFromJsonExamplePageComponent,
    ViaNpminstallationPageComponent,
    ViaModulesInstallationPageComponent,
    HeaderComponent,
    SideBarComponent,
    LinkComponent,
    HomePageComponent,
    CreatingElementsPageComponent,
    RenderingElementsPageComponent,
    FormGroupsPageComponent,
    ApiReferencePageComponent,
    NavigationRowComponent,
    AccessibilityPageComponent,
    TestingPageComponent,
    ConfigurationOptionsPageComponent,
    ElementPropertiesPageComponent,
    StyleGuidePageComponent,
    CsshelpersPageComponent
  ],
  imports: [
    BrowserModule,
    SimpleFormsModule,
    AppRoutingModule,
    NgxPageScrollModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
