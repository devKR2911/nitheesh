import { Component, OnInit } from '@angular/core';
import aboutMe from '../../../assets/data/about-me';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }
  experienceStr:string = '';
  user = aboutMe;

  ngOnInit(): void {}

}
