// skills.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  technicalSkills: any[] = [
    { name: "HTML", rating: "         ★★★★" },
    { name: "CSS", rating: "          ★★★★" },
    { name: "JavaScript", rating: "   ★★★☆" },
    { name: "TypeScript", rating: "   ★★★☆" },
    { name: "Angular", rating: "★★★☆" },
    { name: "Bootstrap", rating: "★★★☆" },
    { name: "MySQL", rating: "★★★☆" },
    { name: "WordPress", rating: "★★★☆" },
    { name: "Java", rating: "★★☆☆" },
    { name: "GitHub", rating: "★★☆☆" },
    { name: "Git", rating: "★★☆☆" },
    { name: "JDBC", rating: "★★☆☆" },
    { name: "MAVEN", rating: "★★☆☆" },
    { name: "SERVLET", rating: "★★☆☆" },
    { name: "JSP", rating: "★★☆☆" },
  ];

  languageSkills: any[] = [
    { name: "English", rating: "★★★☆" },
    { name: "Hindi", rating: "★★★☆" },
    { name: "Kannada", rating: "★★★★" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
