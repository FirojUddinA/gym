import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mi-ejercicio',
  templateUrl: './mi-ejercicio.page.html',
  styleUrls: ['./mi-ejercicio.page.scss'],
})
export class MiEjercicioPage implements OnInit {

  constructor(private router: Router) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    className: 'sliderhfghd',
  };
  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/setting']);
  }
}
