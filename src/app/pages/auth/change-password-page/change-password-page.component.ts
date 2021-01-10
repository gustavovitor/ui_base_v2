import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/security/auth.service';
import { ToastService } from '../../../services/util/toast.service';
import { ErrorHandlerService } from '../../../services/util/error-handler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormUtils } from '../../../core/form-utils';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-change-password-page',
  templateUrl: './change-password-page.component.html',
  styleUrls: ['./change-password-page.component.scss']
})
export class ChangePasswordPageComponent implements OnInit {
  submited = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  constructor(private auth: AuthService,
              private toast: ToastService,
              private activatedRoute: ActivatedRoute,
              private errorHandler: ErrorHandlerService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  changePasswordForm = this.formBuilder.group({
    pass: [null, Validators.compose([
      Validators.required
    ])],
    confirmPassword: [null, Validators.compose([
      Validators.required, FormUtils.needToBeEqual('pass', 'As senhas não coincidem.')
    ])]
  });

  ngOnInit() { }

  login() {
    this.submited = true;
    this.auth.changePassword({
      email: this.activatedRoute.snapshot.params.email,
      hash: this.activatedRoute.snapshot.params.hash,
      ...this.changePasswordForm.value
    })
      .then(() => {
        this.toast.success('Senha alterada.');
        this.toast.info('Para sua segurança, por favor, realize o login.');
        this.router.navigate(['/auth']);
        this.submited = false;
      })
      .catch(err => {
        this.submited = false;
        this.errorHandler.error(err);
      });
  }

}
