import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export class YesNoModalConfig {
  yesText ? = 'Sim';
  noText ? = 'Não';
  title ? = 'Tem certeza?';
  message ? = 'Deseja remover este registro?';
}

@Component({
  selector: 'app-yes-no-modal',
  templateUrl: './yes-no-modal.component.html',
  styleUrls: ['./yes-no-modal.component.scss']
})
export class YesNoModalComponent implements OnInit, AfterViewInit {

  constructor(private activeModal: NgbActiveModal) { }

  @ViewChild('buttonYes') buttonYes: ElementRef;

  yesNoModalConfig = new YesNoModalConfig();

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.buttonYes.nativeElement.focus();
  }

  close(result: any) {
    this.activeModal.close(result);
  }

  dismiss() {
    this.activeModal.dismiss();
  }

}
