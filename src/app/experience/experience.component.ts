import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  experienceList: any[] = [
    {
      id: 0,
      disignation: "IT Analyst.",
      company: {
        name: "TATA Consultancy Services",
        link: "https://www.tcs.com/",
      },
      description: "MEAN Stack developer with proficiency in technologies like Angular 8, React JS, Vue JS, Node JS, MongoDB, D3, SASS, Redux Saga.",
      startDate: "10-10-2018",
      endDate: null,
    },
    {
      id: 1,
      disignation: "Senior Software Engineer.",
      company: {
        name: "Triassic Solutions Private Ltd.",
        link: "http://www.triassicsolutions.com/",
      },
      description: "Frontend developer with proficiency in technologies like Angular 6, Angular JS, Ionic 3, Ionic, Kendo UI, HTML, jQuery, Javascript, Bootstrap 3, Bootstrap 4.",
      startDate: "07-07-2014",
      endDate: "09-24-2018",
    }
  ]

  ngOnInit(): void {
    this.getExperience();
  }

  getDate(date: string) {
    if(!date) {
      return "Present";
    }
    const dateObj = new Date(date);
    const dateStr = `${dateObj.toLocaleString('default', { month: 'long' })} ${dateObj.getFullYear()}`
    return dateStr;
  }

  getExperience() {
    this.experienceList.forEach((experience) => {
      experience.experienceStr = `${this.getDate(experience.startDate)} - ${this.getDate(experience.endDate)}`
    })
  }

}
