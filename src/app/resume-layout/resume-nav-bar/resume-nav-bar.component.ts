import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-nav-bar',
  templateUrl: './resume-nav-bar.component.html',
  styleUrls: ['./resume-nav-bar.component.scss']
})
export class ResumeNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadResume() {
    window.parent.document.title = document.title;
    window.print();
  }

}
