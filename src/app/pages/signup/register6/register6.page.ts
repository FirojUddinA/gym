import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register6',
  templateUrl: './register6.page.html',
  styleUrls: ['./register6.page.scss'],
})
export class Register6Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goback(){
    this.router.navigate(['/signup/register5']);
  }
  gofront(){
    this.router.navigate(['/home/']);
  }
}
