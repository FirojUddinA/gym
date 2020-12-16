import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-basic-plan',
  templateUrl: './basic-plan.component.html',
  styleUrls: ['./basic-plan.component.scss'],
})
export class BasicPlanComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
