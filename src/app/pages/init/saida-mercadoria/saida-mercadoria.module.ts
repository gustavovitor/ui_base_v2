import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaidaMercadoriaRoutingModule } from './saida-mercadoria-routing.module';
import { SaidaMercadoriaListaPageComponent } from './saida-mercadoria-lista-page/saida-mercadoria-lista-page.component';
import { SaidaMercadoriaFormularioPageComponent } from './saida-mercadoria-formulario-page/saida-mercadoria-formulario-page.component';


@NgModule({
  declarations: [SaidaMercadoriaListaPageComponent, SaidaMercadoriaFormularioPageComponent],
  imports: [
    CommonModule,
    SaidaMercadoriaRoutingModule
  ]
})
export class SaidaMercadoriaModule { }
