import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-come-back',
  templateUrl: './come-back.page.html',
  styleUrls: ['./come-back.page.scss'],
})
export class ComeBackPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gofront(){
    this.router.navigate(['/']);
  }
}
