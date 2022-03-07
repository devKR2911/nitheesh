import { Component, OnInit } from '@angular/core';
import { educationList } from '../../../assets/data/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  educationList = educationList;

  openURL(url: string, event: Event) {
    if (url) {
      window.open(url, "_blank");
      event.preventDefault();
      event.stopPropagation();
    }
  }

  ngOnInit(): void {
  }

}
