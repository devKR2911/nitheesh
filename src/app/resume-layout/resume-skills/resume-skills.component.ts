import { Component, OnInit } from '@angular/core';
import skills from '../../../assets/data/skills';

@Component({
  selector: 'app-resume-skills',
  templateUrl: './resume-skills.component.html',
  styleUrls: ['./resume-skills.component.scss']
})
export class ResumeSkillsComponent implements OnInit {

  constructor() { }

  skills = skills;

  ngOnInit(): void {
  }

}
