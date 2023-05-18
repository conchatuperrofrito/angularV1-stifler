import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StiflerComp1Component } from './share/conponent/stifler-comp1/stifler-comp1.component';

const routes: Routes = [
  { path: 'rut1', component: StiflerComp1Component },
  { path: 'products', loadChildren: () => import('./share/component/component-router-file/component-router-file.module').then(m => m.ComponentRouterFileModule) },
  { path: '**', component: StiflerComp1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
