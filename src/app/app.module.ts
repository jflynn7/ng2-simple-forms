import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleFormsModule } from './modules/simple-forms/simple-forms.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
