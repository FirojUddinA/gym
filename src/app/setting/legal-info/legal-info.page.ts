import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-legal-info',
  templateUrl: './legal-info.page.html',
  styleUrls: ['./legal-info.page.scss'],
})
export class LegalInfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/setting']);
  }

}
