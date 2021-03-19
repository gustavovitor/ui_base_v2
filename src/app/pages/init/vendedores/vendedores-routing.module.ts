import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendedoresListaPageComponent } from './vendedores-lista-page/vendedores-lista-page.component';
import { VendedoresFormularioPageComponent } from './vendedores-formulario-page/vendedores-formulario-page.component';

const routes: Routes = [
  {
    path: '',
    component: VendedoresListaPageComponent
  },
  {
    path: 'editar/:vendedorId',
    component: VendedoresFormularioPageComponent
  },
  {
    path: 'inserir',
    component: VendedoresFormularioPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedoresRoutingModule { }
