import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {PlansModalComponent} from '../../components/plans-modal/plans-modal.component';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {
  constructor(private modalController: ModalController) {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: PlansModalComponent,
      cssClass: 'plan-modal',
      componentProps: {
        firstName: 'Douglas',
        lastName: 'Adams',
        middleInitial: 'N'
      }
    });
    return await modal.present();
  }
  ngOnInit() {
  }
}



