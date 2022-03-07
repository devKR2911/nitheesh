import { Component, OnInit } from '@angular/core';
import { educationList } from '../../../assets/data/education';

@Component({
  selector: 'app-resume-education',
  templateUrl: './resume-education.component.html',
  styleUrls: ['./resume-education.component.scss']
})
export class ResumeEducationComponent implements OnInit {

  constructor() { }

  educationList = educationList;

  openURL(url: string, event: Event) {
    if (url) {
      console.log(url)
      window.open(url, "_blank");
      event.preventDefault();
      event.stopPropagation();
    }
  }

  ngOnInit(): void {}

}
