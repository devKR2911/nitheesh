import { Component, OnInit } from '@angular/core';
import projects from '../../../assets/data/projects';

@Component({
  selector: 'app-resume-projects',
  templateUrl: './resume-projects.component.html',
  styleUrls: ['./resume-projects.component.scss']
})
export class ResumeProjectsComponent implements OnInit {

  constructor() { }

  projects = projects;

  ngOnInit(): void {
  }

}
