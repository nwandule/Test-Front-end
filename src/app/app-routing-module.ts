import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentLogin } from './component.login/component.login';
import { ComponentsRegister } from './components.register/components.register';
import { ComponentUpdateDetails } from './component.update-details/component.update-details';
import { ComponentGuardAuth } from './component.guard-auth/component.guard-auth';

const routes: Routes = [
  { path: '', component: ComponentLogin },
  { path: 'register', component: ComponentsRegister },
  { path: 'update-details', component: ComponentUpdateDetails , canActivate: [ComponentGuardAuth] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
