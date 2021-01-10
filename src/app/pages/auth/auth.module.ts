import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    SharedModule,

    AuthRoutingModule,
    FontAwesomeModule
  ],
  declarations: [LoginComponent, LoginPageComponent]
})
export class AuthModule { }
