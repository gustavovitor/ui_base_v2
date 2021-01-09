import { NgModule } from '@angular/core';

import { InitRoutingModule } from './init-routing.module';
import { InitComponent } from './init.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [InitComponent],
  imports: [
    SharedModule,
    InitRoutingModule
  ],
  bootstrap: [InitComponent]
})
export class InitModule { }
