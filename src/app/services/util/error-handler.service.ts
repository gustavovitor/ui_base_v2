import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { APIError, ErrorCodes, UIError } from './error-handler-utils';
import { isNumeric } from 'rxjs/internal-compatibility';
import { Router } from '@angular/router';
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private toast: ToastrService,
              private authService: AuthService,
              private router: Router) { }

  error(error: any, navigateTo: string = null, warningOnMultiple = false): UIError {

    if (!error || isNumeric(error)) {
      return;
    }

    console.error({
      uiMessage: 'Inicio dos tratamentos para mostrar a mensagem de erro.',
      error
    });

    if (typeof error === 'string') {
      this.showErrorToast(error);
      return {
        msg: error,
        error: null
      };
    } else {
      // Filter error.
      if (error instanceof HttpErrorResponse) {
        return this.checkIfErrorIsAPIError(error, navigateTo, warningOnMultiple);
      } else {
        return this.handlerDefaultError();
      }
    }
  }

  private handlerDefaultError() {
    const msg = 'Ocorreu algum erro que eu não pude identificar!';
    this.showErrorToast(msg);
    return {
      msg,
      error: null
    };
  }

  private checkIfErrorIsAPIError(error: HttpErrorResponse, navigateTo: string, warningOnMultiple = false) {
    if (error.error.errorCount) {
      const apiError = new APIError(error.error.errorCount, error.error.errors);
      if (apiError.errorCount === 1) {
        const uiError = {
          code: apiError.errors[0].code,
          msg: apiError.errors[0].message,
          error: apiError.errors[0]
        };

        switch (uiError.error.code) {
          default:
            this.showErrorToast(apiError.errors[0].message);
        }

        return uiError;
      } else {
        const msg = 'Ocorreram erros no servidor!';
        apiError.errors.forEach((err) => {
          if (warningOnMultiple) {
            this.showWarningToast(err.message);
          } else {
            this.showErrorToast(err.message);
          }
        });
        return {
          msg,
          error: apiError
        };
      }
    } else {
      if (error.status === 400) {
        error.error.errors.forEach((err) => {
          this.showErrorToast(err.defaultMessage);
        });
      }
    }
  }

  /* Mostra a mensagem de erro tratada. */
  showErrorToast(msg: string) {
    this.toast.error(msg, 'Um erro ocorreu!', { easeTime: 300, positionClass: 'toast-top-right', closeButton: true });
  }

  private showWarningToast(msg: string) {
    this.toast.warning(msg, 'Temos um problema.', { easeTime: 300, positionClass: 'toast-top-right', closeButton: true });
  }
}
