import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntradaMercadoriaListaPageComponent} from "./entrada-mercadoria-lista-page/entrada-mercadoria-lista-page.component";
import {EntradaMercadoriaFormularioPageComponent} from "./entrada-mercadoria-formulario-page/entrada-mercadoria-formulario-page.component";

const routes: Routes = [
  {
  path: '',
  component: EntradaMercadoriaListaPageComponent
  },
  {
    path: 'editar/:produtoMovimentoId',
    component: EntradaMercadoriaFormularioPageComponent
  },
  {
    path: 'inserir',
    component: EntradaMercadoriaFormularioPageComponent
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradaMercadoriaRoutingModule { }
