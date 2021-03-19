import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './init.component';

const routes: Routes = [
  {
    path: '',
    component: InitComponent,
    children: [
      {
        path: 'vendedores',
        loadChildren: () => import('./vendedores/vendedores.module').then(m => m.VendedoresModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitRoutingModule { }
