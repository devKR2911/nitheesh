import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-skills',
  templateUrl: './resume-skills.component.html',
  styleUrls: ['./resume-skills.component.scss']
})
export class ResumeSkillsComponent implements OnInit {

  constructor() { }

  skills = {
    programingLanguages: ["React JS", "Vue JS", "Angular", "Angular JS", "Node JS", "GraphQL", "Ionic 4", "Ionic", "Kendo UI", "TypeScript", "JavaScript", "jQuery", "HTML" ],
    applications: [" Visual Studio Code", "Visual Studio 2013", "Brackets"],
    database: ["MySQL", "MongoDB"],
    opperatingSystem: ["Windows", "Linux"]
  };

  ngOnInit(): void {
  }

}
