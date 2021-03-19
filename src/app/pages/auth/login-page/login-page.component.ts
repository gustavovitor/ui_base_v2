import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/security/auth.service';
import { ToastService } from '../../../services/util/toast.service';
import { ErrorHandlerService } from '../../../services/util/error-handler.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  submited = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  constructor(private auth: AuthService,
              private toast: ToastService,
              private errorHandler: ErrorHandlerService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  userForm = this.formBuilder.group({
    email: [null, Validators.compose([
      Validators.required
    ])],
    senha: [null, Validators.compose([
      Validators.required
    ])]
  });

  ngOnInit() { }

  login() {
    this.submited = true;
    this.auth.login(this.userForm.value)
      .then(() => {
        this.toast.success('Logado com sucesso');
        this.router.navigate(['/pages']);
        this.submited = false;
      })
      .catch(err => {
        this.submited = false;
        this.errorHandler.error(err);
      });
  }

}
