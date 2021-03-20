import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesListaPageComponent} from "./clientes-lista-page/clientes-lista-page.component";
import { ClientesFormularioPageComponent} from "./clientes-formulario-page/clientes-formulario-page.component";

const routes: Routes = [
  {
    path:'',
    component: ClientesListaPageComponent
  },
  {
    path: 'editar/:clienteId',
    component: ClientesFormularioPageComponent
  },
  {
    path: 'inserir',
    component: ClientesFormularioPageComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
