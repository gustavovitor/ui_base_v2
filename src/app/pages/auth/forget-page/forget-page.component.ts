import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/security/auth.service';
import { ToastService } from '../../../services/util/toast.service';
import { ErrorHandlerService } from '../../../services/util/error-handler.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forget-page',
  templateUrl: './forget-page.component.html',
  styleUrls: ['./forget-page.component.scss']
})
export class ForgetPageComponent implements OnInit {
  submited = false;

  constructor(private auth: AuthService,
              private toast: ToastService,
              private errorHandler: ErrorHandlerService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  userForm = this.formBuilder.group({
    email: [null, Validators.compose([
      Validators.required
    ])]
  });

  ngOnInit() { }

  forgetPassword() {
    this.submited = true;
    this.auth.forgetPassword(this.userForm.value)
      .then(() => {
        this.toast.info('Enviamos um e-mail de confirmação.');
        this.router.navigate(['/auth']);
        this.submited = false;
      })
      .catch(err => {
        this.submited = false;
        this.errorHandler.error(err);
      });
  }

}
