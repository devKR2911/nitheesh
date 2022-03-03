import { Component, OnInit } from '@angular/core';
import experienceList from '../../../assets/data/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  experienceList: any[] = experienceList;

  ngOnInit(): void {}

}
