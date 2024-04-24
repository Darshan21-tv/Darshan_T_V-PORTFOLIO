// about.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  professionalSummary: string = `I aim to secure a position as a Software Developer where I can use my skills in HTML, CSS, JavaScript, and Angular to work on exciting projects, learn, and grow professionally in a dynamic environment.`;

  constructor() { }

  ngOnInit(): void {
  }

}
