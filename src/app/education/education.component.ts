// education.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationDetails: any[] = [
    {
      degree: "Bachelor’s Degree In Computer Science",
      institution: "Sahyadri Science College Shimoga [Kuvempu University]",
      status: "Pursuing"
    },
    {
      degree: "PUC",
      institution: "Govt PU College Sagara",
      percentage: "79.16%"
    },
    {
      degree: "SSLC",
      institution: "Govt High School Basrur, Kundapur",
      percentage: "77.92%"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
