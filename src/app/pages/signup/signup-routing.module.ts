import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupPage } from './signup.page';

const routes: Routes = [
  {
    path: '',
    component: SignupPage,
    children: [
      {
        path: 'register1',
        loadChildren: () => import('./register1/register1.module').then( m => m.Register1PageModule)
      },
      {
        path: 'register2',
        loadChildren: () => import('./register2/register2.module').then( m => m.Register2PageModule)
      },
      {
        path: 'register3',
        loadChildren: () => import('./register3/register3.module').then( m => m.Register3PageModule)
      },
      {
        path: 'register4',
        loadChildren: () => import('./register4/register4.module').then( m => m.Register4PageModule)
      },
      {
        path: 'register5',
        loadChildren: () => import('./register5/register5.module').then( m => m.Register5PageModule)
      },
      {
        path: 'register6',
        loadChildren: () => import('./register6/register6.module').then( m => m.Register6PageModule)
      },
      {
        path: '',
        redirectTo: 'register1'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupPageRoutingModule {}
