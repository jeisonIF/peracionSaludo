import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstaOperacionesPage } from './esta-operaciones.page';

const routes: Routes = [
  {
    path: '',
    component: EstaOperacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstaOperacionesPageRoutingModule {}
