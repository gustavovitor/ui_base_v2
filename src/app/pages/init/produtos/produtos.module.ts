import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosListaPageComponent } from './produtos-lista-page/produtos-lista-page.component';
import { ProdutosFormularioPageComponent } from './produtos-formulario-page/produtos-formulario-page.component';
import { SharedModule } from '../../../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [ProdutosListaPageComponent, ProdutosFormularioPageComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SharedModule,
    NgxMaskModule
  ]
})
export class ProdutosModule { }
