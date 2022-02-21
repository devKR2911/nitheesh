import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  educationList: any[] = [
    {
      id: 0,
      university: "University of Calicut",
      institute: "MES College Of Engineering Kuttippuram",
      link: "https://www.mesce.ac.in/",
      degree: "Bachelor of Technology",
      course: "Electronics & Communication Engineering",
      mark: "CGPA: 7.49",
      duration: "May 2010 - April 2014"
    },
    {
      id: 0,
      university: "Tamil Nadu Open University",
      institute: "Tamil Nadu Open University",
      link: "https://tnou.ac.in/",
      degree: "Post Graduate Diploma",
      course: "Software Quality Management",
      mark: "First Class",
      duration: "December 2019"
    },
    {
      id: 1,
      university: "Kerala State Board",
      institute: "Model Boys Higher Secondary School Kunnamkulam",
      link: "",
      degree: "Higher Secondary Education",
      course: "Computer Science",
      mark: "Percentage: 90.5",
      duration: "May 2008 - April 2010"
    },
    {
      id: 2,
      university: "Kerala State Board",
      institute: "Bethany St. Johns English HSS Kunnamkulam",
      link: "http://www.bethanystjohns.edu.in/",
      degree: "High School Education",
      course: "General Education",
      mark: "Percentage: 85",
      duration: "May 2007 - April 2008"
    }
  ];

  openURL(url:string) {
    window.open(url, "_blank");
  }

  ngOnInit(): void {
  }

}
