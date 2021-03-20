import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingService } from './services/util/loading.service';
import { MaskPipe, NgxMaskModule } from 'ngx-mask';

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem('access_token');
    },
    whitelistedDomains: environment.TokenWhitelistedDomains,
    blacklistedRoutes: environment.TokenBlacklistedRoutes
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,

    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }
    }),

    NgbModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),

    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [
    LoadingService,
    MaskPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
