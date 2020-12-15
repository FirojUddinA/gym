import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiEjercicioPage } from './mi-ejercicio.page';

const routes: Routes = [
  {
    path: '',
    component: MiEjercicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiEjercicioPageRoutingModule {}
