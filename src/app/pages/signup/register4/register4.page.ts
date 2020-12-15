import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register4',
  templateUrl: './register4.page.html',
  styleUrls: ['./register4.page.scss'],
})
export class Register4Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goback(){
    this.router.navigate(['/signup/register3']);
  }
  gofront(){
    this.router.navigate(['/signup/register5']);
  }
}
