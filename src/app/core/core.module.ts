import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/security/auth.service';
import { BaseHttp } from '../services/security/base-http';
import { AuthGuard } from '../services/security/guard/auth.guard';
import { LogoutService } from '../services/security/logout.service';
import { CUSTOM_ERROR_MESSAGES, NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ERRORS } from './validation-messages';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    NgbModule,

    HttpClientModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  declarations: [],
  providers: [
    HttpClient,
    BaseHttp,

    AuthService,
    LogoutService,
    AuthGuard,

    {
      provide: CUSTOM_ERROR_MESSAGES,
      useValue: CUSTOM_ERRORS,
      multi: true
    }
  ]
})
export class CoreModule { }
