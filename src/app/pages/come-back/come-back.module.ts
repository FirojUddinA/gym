import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComeBackPageRoutingModule } from './come-back-routing.module';

import { ComeBackPage } from './come-back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComeBackPageRoutingModule
  ],
  declarations: [ComeBackPage]
})
export class ComeBackPageModule {}
