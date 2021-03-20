import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoadingService {

  private showLoading = false;
  public isLoading() {
    return this.showLoading;
  }

  constructor(private spinner: NgxSpinnerService) { }

  public async show(show = true) {
    if (show) {
      await this.spinner.show();
    } else {
      this.spinner.hide();
    }
  }
}
