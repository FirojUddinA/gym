import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'statistic',
        loadChildren: () => import('../pages/statistic/statistic.module').then( m => m.StatisticPageModule)
      },
      {
        path: 'recetas',
        loadChildren: () => import('../pages/recetas/recetas.module').then( m => m.RecetasPageModule)
      },
      {
        path: 'mi-plan',
        loadChildren: () => import('../pages/mi-plan/mi-plan.module').then( m => m.MiPlanPageModule)
      },
      {
        path: 'mi-ejercicio',
        loadChildren: () => import('../pages/mi-ejercicio/mi-ejercicio.module').then( m => m.MiEjercicioPageModule)
      },
      {
        path: 'recetas-details',
        loadChildren: () => import('../pages/recetas-details/recetas-details.module').then( m => m.RecetasDetailsPageModule)
      },
      {
        path: '',
        redirectTo: 'dashboard'
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
