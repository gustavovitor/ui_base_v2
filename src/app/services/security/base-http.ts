import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { AuthService } from './auth.service';

import { Observable, from as observableFromPromise } from 'rxjs';
import { Router } from '@angular/router';
import { LoadingService } from '../util/loading.service';

export class NotAuthenticatedError {}

@Injectable()
export class BaseHttp extends HttpClient {
  constructor(private auth: AuthService,
              private httpHandler: HttpHandler,
              private router: Router,
              private loadingService: LoadingService) {
    super(httpHandler);
  }

  delete<T>(url: string, options?: any): Observable<T> {
    this.loadingService.show();
    return this.makeRequest<T>(() => {
      return observableFromPromise(super.delete<T>(url, options).toPromise()
        .then((response) => {
          this.loadingService.show(false);
          return Promise.resolve(response);
        })
        .catch((error) => {
          this.loadingService.show(false);
          return Promise.reject(error);
        }));
    });
  }

  get<T>(url: string, options?: any, showLoading = true): Observable<T> {
    if (showLoading) {
      this.loadingService.show();
    }
    return this.makeRequest<T>(() => {
      let observable;
      if (options) {
        observable = super.get<T>(url, options);
      } else {
        observable = super.get<T>(url);
      }

      return this.makeRequestFromObservable(observable, showLoading);
    });
  }

  private makeRequestFromObservable(observable, showLoading: boolean) {
    return observableFromPromise(observable.toPromise()
      .then((response) => {
        if (showLoading) {
          this.loadingService.show(false);
        }
        return Promise.resolve(response);
      })
      .catch((error) => {
        if (showLoading) {
          this.loadingService.show(false);
        }
        return Promise.reject(error);
      }));
  }

  head<T>(url: string, options?: any): Observable<T> {
    this.loadingService.show();
    return this.makeRequest<T>(() => {
      return observableFromPromise(super.head<T>(url, options).toPromise()
        .then((response) => {
          this.loadingService.show(false);
          return Promise.resolve(response);
        })
        .catch((error) => {
          this.loadingService.show(false);
          return Promise.reject(error);
        }));
    });
  }

  options<T>(url: string, options?: any): Observable<T> {
    this.loadingService.show();
    return this.makeRequest<T>(() => {
      return observableFromPromise(super.options<T>(url, options).toPromise()
        .then((response) => {
          this.loadingService.show(false);
          return Promise.resolve(response);
        })
        .catch((error) => {
          this.loadingService.show(false);
          return Promise.reject(error);
        }));
    });
  }

  patch<T>(url: string, body: any | null, options?: any, showLoading = true): Observable<T> {
    if (showLoading) {
      this.loadingService.show();
    }
    return this.makeRequest<T>(() => {
      let observable;
      if (options) {
        observable = super.patch<T>(url, body, options);
      } else {
        observable = super.patch<T>(url, body);
      }
      return this.makeRequestFromObservable(observable, showLoading);
    });
  }

  post<T>(url: string, body: any | null, options?: any, showLoading = true): Observable<T> {
    if (showLoading) {
      this.loadingService.show();
    }
    return this.makeRequest<T>(() => {
      let observable;
      if (options) {
        observable = super.post<T>(url, body, options);
      } else {
        observable = super.post<T>(url, body);
      }
      return this.makeRequestFromObservable(observable, showLoading);
    });
  }

  put<T>(url: string, body: any | null, options?: any, showLoading = true): Observable<T> {
    if (showLoading) {
      this.loadingService.show();
    }
    return this.makeRequest<T>(() => {
      let observable;
      if (options) {
        observable = super.put<T>(url, body, options);
      } else {
        observable = super.put<T>(url, body);
      }

      return this.makeRequestFromObservable(observable, showLoading);
    });
  }

  /* Intercepta todas as requisições da feitas à API para checar antes o access_token. */
  private makeRequest<T>(func: Function): Observable<T> {
    if(this.auth.isAccessTokenInvalid) {
      const chamadaNovoAccessToken = this.auth.getNewAccessToken()
        .then(() => {
          if(this.auth.isAccessTokenInvalid) {
            this.loadingService.show(false);
            this.router.navigate(['/auth']);
            throw new NotAuthenticatedError();
          }
          return func().toPromise();
        })
        .catch(() => {
          this.loadingService.show(false);
        });
      return observableFromPromise(chamadaNovoAccessToken);
    } else {
      return func();
    }
  }
}
