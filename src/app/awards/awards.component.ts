// awards.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  awards: any[] = [
    {
      title: "Introduction to HTML",
      link: "https://simpli-web.app.link/e/aWj3UgOubGb"
    },
    {
      title: "Introduction to JavaScript",
      link: "https://simpli-web.app.link/e/1NV59VlMiGb"
    },
    {
      title: "Planning And Designing UI",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7157713157992439811/"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
