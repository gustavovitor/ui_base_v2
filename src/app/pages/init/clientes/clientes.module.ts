import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListaPageComponent } from './clientes-lista-page/clientes-lista-page.component';
import { ClientesFormularioPageComponent } from './clientes-formulario-page/clientes-formulario-page.component';

@NgModule({
  declarations: [ClientesListaPageComponent, ClientesFormularioPageComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
