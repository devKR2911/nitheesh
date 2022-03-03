import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-layout',
  templateUrl: './resume-layout.component.html',
  styleUrls: ['./resume-layout.component.scss']
})
export class ResumeLayoutComponent implements OnInit {

  constructor() {}

  experienceList = [
    {
      company: "Tata Consultancy Services",
      location: "Trivandrum, Kerala, India",
      designation: "I.T Analyst",
      duration: "October 2018 - PRESENT",
      description: "Full Stack developer with proficiency in technologies like React JS, Vue JS, Angular 8, MongoDB, GraphQL, Node JS, TypeScript, D3, SASS, Redux Saga."
    },
    {
      company: "Triassic Solutions PVT LTD",
      location: "Trivandrum, Kerala, India",
      designation: "Senior Software Engineer",
      duration: "July 2014 - September 2018",
      description: "Frontend developer with proficiency in technologies like Angular 6, Angular JS, Ionic 3, Ionic, Kendo UI, HTML, jQuery, Javascript, Bootstrap 3, Bootstrap 4."
    }
  ]

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
