import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../services/security/auth.service';
import { ToastService } from '../../../services/util/toast.service';
import { ErrorHandlerService } from '../../../services/util/error-handler.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormUtils } from '../../../core/form-utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submited = false;

  @Output() registered = new EventEmitter();

  constructor(private auth: AuthService,
              private toast: ToastService,
              private errorHandler: ErrorHandlerService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  userForm = this.formBuilder.group({
    user: [null, Validators.compose([
      Validators.required, Validators.maxLength(128), Validators.minLength(3)
    ])],
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    pass: [null, Validators.compose([
      Validators.required, Validators.maxLength(256), Validators.minLength(3)
    ])],
    confirmPassword: [null, Validators.compose([
      Validators.required, FormUtils.needToBeEqual('pass', 'As senhas não coincidem.')
    ])]
  });

  ngOnInit() { }

  register() {
    this.submited = true;
    this.auth.register(this.userForm.value)
      .then(response => {
        this.toast.success('Registrado com sucesso');
        this.registered.emit({ user: response });
        this.submited = false;
      })
      .catch(err => {
        this.submited = false;
        this.errorHandler.error(err);
      });
  }

}
