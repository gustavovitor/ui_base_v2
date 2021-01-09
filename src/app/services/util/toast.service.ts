import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  SuccessSummaryMessages = [
    'Uufs, consegui.',
    'Opa, deu certo!',
    'Beleza, consegui!'
  ];

  WarningSummaryMessages = [
    'Ei, atenção!',
    'Cuidado, olhe bem..',
    'Calma aí, falta algo?'
  ];

  InfoSummaryMessages = [
    'Ei, olhe aqui..',
    'Sabia dessa?'
  ];

  constructor(private toast: ToastrService) {}

  success(msg: string) {
    this.toast.success(msg, this.SuccessSummaryMessages[
      Math.floor(Math.random() * this.SuccessSummaryMessages.length)
      ]);
  }

  warning(msg: string) {
    this.toast.warning(msg, this.WarningSummaryMessages[
      Math.floor(Math.random() * this.WarningSummaryMessages.length)
      ]);
  }

  info(msg: string) {
    this.toast.info(msg, this.InfoSummaryMessages[
      Math.floor(Math.random() * this.InfoSummaryMessages.length)
      ]);
  }

}
