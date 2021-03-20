import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LancamentoComissaoListaPageComponent} from "./lancamento-comissao-lista-page/lancamento-comissao-lista-page.component";
import {LancamentoComissaoFormularioPageComponent} from "./lancamento-comissao-formulario-page/lancamento-comissao-formulario-page.component";

const routes: Routes = [
  {
  path:'',
  component: LancamentoComissaoListaPageComponent
  },
  {
    path: 'inserir',
    component: LancamentoComissaoFormularioPageComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentoComissaoRoutingModule { }
