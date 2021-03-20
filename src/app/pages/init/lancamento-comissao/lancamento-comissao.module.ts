import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentoComissaoRoutingModule } from './lancamento-comissao-routing.module';
import { LancamentoComissaoListaPageComponent } from './lancamento-comissao-lista-page/lancamento-comissao-lista-page.component';
import { LancamentoComissaoFormularioPageComponent } from './lancamento-comissao-formulario-page/lancamento-comissao-formulario-page.component';

@NgModule({
  declarations: [LancamentoComissaoListaPageComponent, LancamentoComissaoFormularioPageComponent],
  imports: [
    CommonModule,
    LancamentoComissaoRoutingModule
  ]
})
export class LancamentoComissaoModule { }
