import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosListaPageComponent } from './produtos-lista-page/produtos-lista-page.component';
import { ProdutosFormularioPageComponent } from './produtos-formulario-page/produtos-formulario-page.component';


@NgModule({
  declarations: [ProdutosListaPageComponent, ProdutosFormularioPageComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
