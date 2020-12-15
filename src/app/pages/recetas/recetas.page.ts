import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SearchModalComponent} from '../../components/search-modal/search-modal.component';
import {SearchModal2Component} from '../../components/search-modal2/search-modal2.component';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

  constructor(private modalController: ModalController) {}
  async searchModal() {
    const modal = await this.modalController.create({
      component: SearchModal2Component,
      cssClass: 'searchmodal',
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
