import { Component, OnInit } from '@angular/core';
import aboutMe from '../../../assets/data/about-me';

@Component({
  selector: 'app-resume-about-me',
  templateUrl: './resume-about-me.component.html',
  styleUrls: ['./resume-about-me.component.scss']
})
export class ResumeAboutMeComponent implements OnInit {

  constructor() { }
  experienceStr:string = '';
  user = aboutMe;

  ngOnInit(): void {}

}
