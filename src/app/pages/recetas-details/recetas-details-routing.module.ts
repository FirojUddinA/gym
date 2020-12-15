import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetasDetailsPage } from './recetas-details.page';

const routes: Routes = [
  {
    path: '',
    component: RecetasDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetasDetailsPageRoutingModule {}
