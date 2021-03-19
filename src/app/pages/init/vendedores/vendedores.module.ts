import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedoresRoutingModule } from './vendedores-routing.module';
import { VendedoresListaPageComponent } from './vendedores-lista-page/vendedores-lista-page.component';
import { VendedoresFormularioPageComponent } from './vendedores-formulario-page/vendedores-formulario-page.component';


@NgModule({
  declarations: [VendedoresListaPageComponent, VendedoresFormularioPageComponent],
  imports: [
    CommonModule,
    VendedoresRoutingModule
  ]
})
export class VendedoresModule { }
