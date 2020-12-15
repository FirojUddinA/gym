import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-search-modal2',
  templateUrl: './search-modal2.component.html',
  styleUrls: ['./search-modal2.component.scss'],
})
export class SearchModal2Component implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
