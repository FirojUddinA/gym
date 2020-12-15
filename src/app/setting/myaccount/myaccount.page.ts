import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/setting']);
  }
}
