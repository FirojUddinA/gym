import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register5',
  templateUrl: './register5.page.html',
  styleUrls: ['./register5.page.scss'],
})
export class Register5Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goback(){
    this.router.navigate(['/signup/register4']);
  }
  gofront(){
    this.router.navigate(['/signup/register6']);
  }
}
