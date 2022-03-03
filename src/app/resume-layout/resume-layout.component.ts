import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-layout',
  templateUrl: './resume-layout.component.html',
  styleUrls: ['./resume-layout.component.scss']
})
export class ResumeLayoutComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  downloadResume() {
    window.parent.document.title = document.title;
    window.print();
  }

}
