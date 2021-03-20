import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradaMercadoriaRoutingModule } from './entrada-mercadoria-routing.module';
import { EntradaMercadoriaFormularioPageComponent } from './entrada-mercadoria-formulario-page/entrada-mercadoria-formulario-page.component';
import { EntradaMercadoriaListaPageComponent } from './entrada-mercadoria-lista-page/entrada-mercadoria-lista-page.component';

@NgModule({
  declarations: [EntradaMercadoriaFormularioPageComponent, EntradaMercadoriaListaPageComponent],
  imports: [
    CommonModule,
    EntradaMercadoriaRoutingModule
  ]
})
export class EntradaMercadoriaModule { }
