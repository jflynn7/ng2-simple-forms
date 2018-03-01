import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleFormsModule } from './modules/simple-forms/simple-forms.module';
import { AppRoutingModule } from './app-routing.module';
import { UnwrappedFormExamplePageComponent } from './pages/unwrapped-form-example-page/unwrapped-form-example-page.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    UnwrappedFormExamplePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SimpleFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
