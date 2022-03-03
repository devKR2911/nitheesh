import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-layout',
  templateUrl: './resume-layout.component.html',
  styleUrls: ['./resume-layout.component.scss']
})
export class ResumeLayoutComponent implements OnInit {

  constructor() {}


  educationList = [
    {
      id: 0,
      institute: "Tamil Nadu Open University",
      location: "Anna Salai, Chennai, Tamil Nadu, India",
      degree: "Post Graduate Diploma.",
      duration: "January 2019 - December 2019",
      branch: "Software Quality Management.",
    },
    {
      id: 1,
      institute: "MES College of Engineering",
      location: "Kuttippuram, Malappuram, Kerala, India",
      degree: "Bachelor Of Technology",
      duration: "May 2010 - April 2014",
      branch: "Electronics & Communication Engineering.",
    },
    {
      id: 2,
      institute: "Govt. Model Boys Higher Secondary School",
      location: "Kunnamkulam, Thrissur, Kerala, India",
      degree: "Higher Secondary Education.",
      duration: "May 2008 - April 2010",
      branch: "Computer Science.",
    },
    {
      id: 3,
      institute: "Bethany St Johns English Higher Secondary School",
      location: "Kunnamkulam, Thrissur, Kerala, India",
      degree: "Secondary Education.",
      duration: "May 2007 - April 2008",
    }
  ]

  ngOnInit(): void {
  }

  downloadResume() {
    window.parent.document.title = document.title;
    window.print();
  }

}
