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
import {RattingPopoverComponent} from './ratting-popover/ratting-popover.component';
import {PlansModalComponent} from './plans-modal/plans-modal.component';
import {SearchModalComponent} from './search-modal/search-modal.component';
import {SearchModal2Component} from './search-modal2/search-modal2.component';



@NgModule({

  declarations: [ArencionComponent, FelictionComponent, MiejectionComponent,
    MiplanComponent, RectasComponent, RectasitemComponent, SliderComponent, RectasNullComponent,
  RattingPopoverComponent, PlansModalComponent, SearchModalComponent, SearchModal2Component],
  exports: [ ArencionComponent, FelictionComponent, MiejectionComponent,
    MiplanComponent, RectasComponent, RectasitemComponent, SliderComponent, RectasNullComponent,
  RattingPopoverComponent, PlansModalComponent, SearchModalComponent, SearchModal2Component],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
