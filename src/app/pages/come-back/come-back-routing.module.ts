import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComeBackPage } from './come-back.page';

const routes: Routes = [
  {
    path: '',
    component: ComeBackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComeBackPageRoutingModule {}
