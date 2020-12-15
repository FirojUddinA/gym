import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mi-plan',
  templateUrl: './mi-plan.page.html',
  styleUrls: ['./mi-plan.page.scss'],
})
export class MiPlanPage implements OnInit {

  constructor(private router: Router) { }
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/setting']);
  }

}
