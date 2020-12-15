import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiEjercicioPageRoutingModule } from './mi-ejercicio-routing.module';

import { MiEjercicioPage } from './mi-ejercicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiEjercicioPageRoutingModule
  ],
  declarations: [MiEjercicioPage]
})
export class MiEjercicioPageModule {}
