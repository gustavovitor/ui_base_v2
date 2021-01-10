import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgetPageComponent } from './forget-page/forget-page.component';
import { ChangePasswordPageComponent } from './change-password-page/change-password-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ConfirmAuthUserPageComponent } from './confirm-auth-user-page/confirm-auth-user-page.component';

@NgModule({
  imports: [
    SharedModule,

    AuthRoutingModule,
    FontAwesomeModule
  ],
  declarations: [LoginPageComponent, ForgetPageComponent, ChangePasswordPageComponent, RegisterPageComponent, ConfirmAuthUserPageComponent]
})
export class AuthModule { }
