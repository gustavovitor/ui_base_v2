import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/security/auth.service';
import { ErrorHandlerService } from '../../../services/util/error-handler.service';
import { ToastService } from '../../../services/util/toast.service';

@Component({
  selector: 'app-confirm-auth-user-page',
  templateUrl: './confirm-auth-user-page.component.html',
  styleUrls: ['./confirm-auth-user-page.component.scss']
})
export class ConfirmAuthUserPageComponent implements OnInit {
  submited = true;
  success = false;

  constructor(private activatedRoute: ActivatedRoute,
              private toast: ToastService,
              private router: Router,
              private errorHandler: ErrorHandlerService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.start();
  }

  private start() {
    const authUserConfirmationObject = {
      email: this.activatedRoute.snapshot.params.email,
      hash: this.activatedRoute.snapshot.params.hash
    };

    setTimeout(() => {
      this.authService.confirmEmail(authUserConfirmationObject)
        .then(() => {
          this.submited = false;
          this.success = true;

          this.toast.success('Ok, você está pronto para utilizar o sistema.');

          setTimeout(() => {
            this.router.navigate(['/auth']);
          }, 2000);
        })
        .catch((err) => {
          this.submited = false;
          this.success = false;
          this.errorHandler.error(err);
        })
    }, 500);
  }
}
