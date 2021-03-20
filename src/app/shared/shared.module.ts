import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { DataTableComponent } from './data-table/data-table.component';
import { YesNoModalComponent } from './yes-no-modal/yes-no-modal.component';

@NgModule({
  declarations: [
    DataTableComponent,
    YesNoModalComponent
  ],
  imports: [
    CommonModule,
    NgBootstrapFormValidationModule,
    NgbTooltipModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule,
    DataTableComponent,
    YesNoModalComponent,
    NgbTooltipModule
  ]
})
export class SharedModule { }
