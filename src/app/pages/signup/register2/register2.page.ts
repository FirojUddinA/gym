import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {

  constructor(private router: Router) { }
  public form = [
    { val: 'Alergias alimentarias', isChecked: true },
    { val: 'Intolerancia alimentaria', isChecked: true },
    { val: 'Anemia', isChecked: false },
    { val: 'Diabetes', isChecked: false },
    { val: 'Hipertensión', isChecked: false },
    { val: 'Colesterol y triglicéridos elevado', isChecked: false },
    { val: 'Estreñimiento', isChecked: false },
    { val: 'Acidez', isChecked: false },
    { val: 'Gastritis', isChecked: false },
  ];

  ngOnInit() {
  }
  goback(){
    this.router.navigate(['/signup/register1']);
  }
  gofront(){
    this.router.navigate(['/signup/register3']);
  }
}
