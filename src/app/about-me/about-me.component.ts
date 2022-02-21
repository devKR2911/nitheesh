import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }
  experienceStr:string = '';
  user = {
    firstName: 'Nitheesh',
    lastName: 'KR',
    location: 'Vadakkekad, Thrissur, Kerala, India',
    email: 'ramakrishnan.nitheesh@gmail.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/nitheesh-kr/',
      github: 'https://github.com/devKR2911/',
      medium: 'https://medium.com/@nitheeshkr115',
      stackoverflow: {
        profile: 'https://stackoverflow.com/users/6099327/nitheesh',
        image: 'https://stackoverflow.com/users/flair/6099327.png'
      }
    },
    aboutMe: 'A passionate MEAN stack <del>developer</del> problem solver with ',
    aboutMe2: ' of industrial experience.',
    resume: 'assets/documents/Nitheesh_KR_Resume.pdf',
  };

  private getMyExperience() {
    var startDate:any = new Date(2014, 6, 7);
    var currentDate:any = new Date();
    var diff_date:any = currentDate - startDate;

    var num_years:any = Math.floor(diff_date / 31536000000);
    var num_months:any = Math.floor((diff_date % 31536000000) / 2628000000);
    // var num_days = Math.floor(((diff_date % 31536000000) % 2628000000)/86400000);

    var expStr = '';
    expStr += num_years + ' years';
    expStr += num_months > 0 ? ' and ' + num_months + ' months' : '';
    this.experienceStr = expStr
  }

  public goToLink(link:string) {
    window.open(link, "_blank");
  }

  ngOnInit(): void {
    this.getMyExperience();
  }

}
