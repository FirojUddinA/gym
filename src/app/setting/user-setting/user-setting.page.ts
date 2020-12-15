import { Component, OnInit } from '@angular/core';
import {ActionSheetController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.page.html',
  styleUrls: ['./user-setting.page.scss'],
})
export class UserSettingPage implements OnInit {
  private loadingController: any;

  constructor(private actionSheetController: ActionSheetController, loadingController: LoadingController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Correr',
        role: 'destructive',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Mensaje',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Mas',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
