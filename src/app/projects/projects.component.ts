// projects.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [
    {
      name: "Movie Time",
      description: "A webpage showcasing great movies. Users can add/delete movies.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://1234darshan.github.io/resume/"
    },
    {
      name: "Heliverse Project",
      description: "An Angular web app enabling user interaction and management with features like pagination, search, filters, team creation, and responsive design.",
      technologies: ["Angular"],
      link: "https://github.com/1234darshan/heliverse-project-angular.git",
      liveDemo: "https://heliverse3.vercel.app/"
    },
    {
      name: "Angular CRUD Application",
      description: "An Angular CRUD application showcasing core features like data management, event handling, and component architecture.",
      technologies: ["Angular"],
      link: "https://github.com/1234darshan/angular-crud1.git",
      liveDemo: "https://angular-crud1.vercel.app/"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
