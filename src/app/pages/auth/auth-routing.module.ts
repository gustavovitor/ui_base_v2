import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { ForgetPageComponent } from './forget-page/forget-page.component';
import { ChangePasswordPageComponent } from './change-password-page/change-password-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ConfirmAuthUserPageComponent } from './confirm-auth-user-page/confirm-auth-user-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'password/forget',
    component: ForgetPageComponent
  },
  {
    path: 'password/change/:email/:hash',
    component: ChangePasswordPageComponent
  },
  {
    path: 'user/confirm/:email/:hash',
    component: ConfirmAuthUserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
