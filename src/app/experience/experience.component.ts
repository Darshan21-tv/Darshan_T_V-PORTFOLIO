// experience.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceDetails: any[] = [
    {
      title: "Customer Service Associate",
      company: "More Super market, Sagara",
      responsibilities: [
        "Managed customer interactions",
        "Resolved issues, and ensured positive shopping experiences",
        "Balanced work commitments with academic responsibilities",
        "Contributed to college fees and personal financial goals"
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
