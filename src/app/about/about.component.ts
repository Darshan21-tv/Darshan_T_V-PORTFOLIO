// about.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  professionalSummary: string = `Hello! I'm Darshan T V, a dedicated Full Stack Developer with a passion for creating innovative solutions using Angular, Java, and MySQL. With a solid foundation in web development and a flair for problem-solving, I thrive in dynamic environments where I can apply my skills to drive impactful projects forward. I bring to the table a blend of technical expertise, creativity, and a commitment to continuous learning, making me an ideal candidate to contribute effectively to your team's success. Let's connect and discuss how my skills can align with your organization's goals.`;

  constructor() { }

  ngOnInit(): void {
  }

}
