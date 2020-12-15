import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.page.html',
  styleUrls: ['./register1.page.scss'],
})
export class Register1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goback(){
    this.router.navigate(['/']);
  }
  gofront(){
    this.router.navigate(['/signup/register2']);
  }

}
