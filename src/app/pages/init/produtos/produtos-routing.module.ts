import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdutosListaPageComponent} from "./produtos-lista-page/produtos-lista-page.component";
import {ProdutosFormularioPageComponent} from "./produtos-formulario-page/produtos-formulario-page.component";

const routes: Routes = [
  {
    path: '',
    component: ProdutosListaPageComponent
  },
  {
    path: 'editar/:produtoId',
    component: ProdutosFormularioPageComponent
  },
  {
    path: 'inserir',
    component: ProdutosFormularioPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
