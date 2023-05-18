import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRouterFileRoutingModule } from './component-router-file-routing.module';
import { ComponentRouterFileComponent } from './component-router-file.component';


@NgModule({
  declarations: [
    ComponentRouterFileComponent
  ],
  imports: [
    CommonModule,
    ComponentRouterFileRoutingModule
  ]
})
export class ComponentRouterFileModule { }
