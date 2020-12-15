import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {RattingPopoverComponent} from '../../components/ratting-popover/ratting-popover.component';

@Component({
  selector: 'app-recetas-details',
  templateUrl: './recetas-details.page.html',
  styleUrls: ['./recetas-details.page.scss'],
})
export class RecetasDetailsPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(eve) {
    const popover = await this.popoverController.create({
      component: RattingPopoverComponent,
      cssClass: 'custom-class',
      // translucent: true,
      event: eve,
      showBackdrop: false,
    });
    return await popover.present();
  }

}
