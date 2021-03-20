import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/security/auth.service';
import { ToastService } from '../../../services/util/toast.service';
import { ErrorHandlerService } from '../../../services/util/error-handler.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FormUtils } from '../../../core/form-utils';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  submited = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  constructor(private auth: AuthService,
              private toast: ToastService,
              private errorHandler: ErrorHandlerService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  registerForm = this.formBuilder.group({
    nomeCompleto: [null, Validators.compose([
      Validators.required, Validators.maxLength(64)
    ])],
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    senha: [null, Validators.compose([
      Validators.required
    ])],
    confirmeSenha: [null, Validators.compose([
      Validators.required, FormUtils.needToBeEqual('senha', 'As senhas não coincidem.')
    ])]
  });

  ngOnInit() { }

  login() {
    this.submited = true;
    this.auth.register(this.registerForm.value)
      .then(() => {
        this.toast.success('Conta criada.');
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
