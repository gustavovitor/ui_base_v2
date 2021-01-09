import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    CommonModule,

    PagesRoutingModule
  ],
  declarations: [PagesComponent],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
