import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SaidaMercadoriaListaPageComponent} from "./saida-mercadoria-lista-page/saida-mercadoria-lista-page.component";
import {SaidaMercadoriaFormularioPageComponent} from "./saida-mercadoria-formulario-page/saida-mercadoria-formulario-page.component";

const routes: Routes = [
  {
    path: '',
    component: SaidaMercadoriaListaPageComponent
  },
  {
    path: 'editar/:produtoMovimentoId',
    component: SaidaMercadoriaFormularioPageComponent
  },
  {
    path: 'inserir',
    component: SaidaMercadoriaFormularioPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaidaMercadoriaRoutingModule { }
