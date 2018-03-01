import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NoFormGroupExamplePageComponent } from './pages/no-form-group-example-page/no-form-group-example-page.component';
import {UnwrappedFormExamplePageComponent} from './pages/unwrapped-form-example-page/unwrapped-form-example-page.component';

const routes: Routes = [
  {
    path: '',
    component: UnwrappedFormExamplePageComponent
  },
  {
    path: 'no-formgroup',
    component: NoFormGroupExamplePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
