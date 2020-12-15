import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingPage } from './setting.page';

const routes: Routes = [
  {
    path: '',
    component: SettingPage,
    children: [
      {
        path: 'user-setting',
        loadChildren: () => import('./user-setting/user-setting.module').then( m => m.UserSettingPageModule)
      },
      {
        path: 'legal-info',
        loadChildren: () => import('./legal-info/legal-info.module').then( m => m.LegalInfoPageModule)
      },
      {
        path: 'myaccount',
        loadChildren: () => import('./myaccount/myaccount.module').then( m => m.MyaccountPageModule)
      },
      {
        path: 'help',
        loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
      },
      {
        path: 'loading',
        loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: '',
        redirectTo: 'user-setting',
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingPageRoutingModule {}
