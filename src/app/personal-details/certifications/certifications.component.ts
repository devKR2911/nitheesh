import { Component, OnInit } from '@angular/core';
import trainings from '../../../assets/data/trainings';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  constructor() { }

  certificationList: any[] = trainings;

  ngOnInit(): void {
  }

}
