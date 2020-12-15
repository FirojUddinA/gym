import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.page.html',
  styleUrls: ['./register3.page.scss'],
})
export class Register3Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goback(){
    this.router.navigate(['/signup/register2']);
  }
  gofront(){
    this.router.navigate(['/signup/register4']);
  }
}
