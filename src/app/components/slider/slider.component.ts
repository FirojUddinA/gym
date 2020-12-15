import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPreView : 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoPlay: true,
    speed: 400,
    pagination: false,
  };
  constructor() { }

  ngOnInit() {}

}
