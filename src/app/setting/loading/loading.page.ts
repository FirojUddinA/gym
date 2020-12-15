import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private loadingController: LoadingController) { }

  ngOnInit() {
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: 5000000,
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true,
      showBackdrop: false,
    });
    await loading.present();

    console.log('Loading dismissed with role:');
  }

}
