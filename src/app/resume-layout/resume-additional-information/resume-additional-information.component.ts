import { Component, OnInit } from '@angular/core';
import aboutMe from '../../../assets/data/about-me';

@Component({
  selector: 'app-resume-additional-information',
  templateUrl: './resume-additional-information.component.html',
  styleUrls: ['./resume-additional-information.component.scss']
})
export class ResumeAdditionalInformationComponent implements OnInit {

  constructor() { }
  user = aboutMe;

  copyToClipBoard(text: string) {
    navigator.clipboard.writeText(text);
  }

  ngOnInit(): void {
  }

}
