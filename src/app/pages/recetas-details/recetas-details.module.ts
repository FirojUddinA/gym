import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetasDetailsPageRoutingModule } from './recetas-details-routing.module';

import { RecetasDetailsPage } from './recetas-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetasDetailsPageRoutingModule
  ],
  declarations: [RecetasDetailsPage]
})
export class RecetasDetailsPageModule {}
