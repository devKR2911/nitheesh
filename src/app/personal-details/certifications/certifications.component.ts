import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  constructor() { }

  certificationList: any[] = [
    {
      id: 0,
      title: "Angular & NodeJS - The MEAN Stack Guide - Udemy",
      link: "https://www.udemy.com/certificate/UC-MHKYU523/",
    },
    {
      id: 1,
      title: "Vue JS 2.0 - Mastering Web Apps - Udemy",
      link: "https://www.udemy.com/certificate/UC-d6702934-999e-4aba-a125-d32289f5586f/",
    },
    {
      id: 2,
      title: "Vue - The Complete Guide (w/ Router, Vuex, Composition API) - Udemy",
      link: "https://www.udemy.com/certificate/UC-7bd851ac-05c0-49b7-9435-ec433d9f1f23/",
    },
    {
      id: 3,
      title: "Accelerated ES6 JavaScript Training",
      link: "https://www.udemy.com/certificate/UC-fc0b2b79-f8ed-41d9-a28b-3c0bd0b8cd02/",
    },
    {
      id: 4,
      title: "GraphQL by Example",
      link: "https://www.udemy.com/certificate/UC-1de2043b-19ac-4007-92e4-59b29462456e/",
    }
  ]

  ngOnInit(): void {
  }

}
