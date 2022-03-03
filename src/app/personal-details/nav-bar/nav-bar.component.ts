import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nodeList = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'trainings', label: 'Trainings' },
    { id: 'education', label: 'Education' },
    { id: 'interests', label: 'Interests' },
    { id: 'awards', label: 'Awards' },
  ];

  public isMenuCollapsed = true;
  public activeTab: String = 'about';

  scroll(targetId: string) {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    this.isMenuCollapsed = true;
    this.activeTab = targetId;
  }

  ngAfterViewInit() {
    this.createObserver();
  }  
  
  createObserver() {
    this.nodeList.forEach((node) => {
      const target = document.querySelector(`#${node.id}`)!;
      let observer: IntersectionObserver;
      let options = {
        threshold: 0.5,
      };
      const handleIntersection = (entries: any[]) => {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            this.activeTab = entry.target.id;
          }
        });
      }
      observer = new IntersectionObserver(handleIntersection, options);
      observer.observe(target);
    })
  }

}
