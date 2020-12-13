import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ArencionComponent} from './arencion/arencion.component';
import {FelictionComponent} from './feliction/feliction.component';
import {MiejectionComponent} from './miejection/miejection.component';
import {MiplanComponent} from './miplan/miplan.component';
import {RectasComponent} from './rectas/rectas.component';
import {RectasitemComponent} from './rectasitem/rectasitem.component';
import {SliderComponent} from './slider/slider.component';
import {RectasNullComponent} from './rectas-null/rectas-null.component';



@NgModule({

  declarations: [ArencionComponent, FelictionComponent, MiejectionComponent,
    MiplanComponent, RectasComponent, RectasitemComponent, SliderComponent, RectasNullComponent],
  exports: [ ArencionComponent, FelictionComponent, MiejectionComponent,
    MiplanComponent, RectasComponent, RectasitemComponent, SliderComponent, RectasNullComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }