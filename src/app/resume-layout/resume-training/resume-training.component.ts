import { Component, OnInit } from '@angular/core';
import trainings from '../../../assets/data/trainings';

@Component({
  selector: 'app-resume-training',
  templateUrl: './resume-training.component.html',
  styleUrls: ['./resume-training.component.scss']
})
export class ResumeTrainingComponent implements OnInit {

  constructor() { }

  trainingList = trainings;

  ngOnInit(): void {
  }

}
