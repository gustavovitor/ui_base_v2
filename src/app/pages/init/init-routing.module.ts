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
      },
      {
        path: 'clientes',
        loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
      },
      {
        path: 'produtos',
        loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
      },
      {
        path: 'lancamento-comissao',
        loadChildren: () => import('./lancamento-comissao/lancamento-comissao.module').then(m => m.LancamentoComissaoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitRoutingModule { }
