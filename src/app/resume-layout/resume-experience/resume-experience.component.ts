import { Component, OnInit } from '@angular/core';
import experienceList from '../../../assets/data/experience';

@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
  styleUrls: ['./resume-experience.component.scss']
})
export class ResumeExperienceComponent implements OnInit {

  constructor() { }

  experienceList = experienceList;

  ngOnInit(): void {}

}
