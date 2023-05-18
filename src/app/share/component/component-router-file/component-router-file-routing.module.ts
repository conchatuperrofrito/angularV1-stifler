import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentRouterFileComponent } from './component-router-file.component';

const routes: Routes = [{ path: '', component: ComponentRouterFileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRouterFileRoutingModule { }
