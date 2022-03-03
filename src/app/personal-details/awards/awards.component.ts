import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  constructor() { }

  awardList:any[] = [
    {
      id: 0,
      title: "<b>Best Project Performer of month</b> at “Petronas” project - 2019"
    },
    {
      id: 1,
      title: "<b>Best Project Performer</b> Client appreciation for the performance in “Tagrail” Project - 2018"
    },
    {
      id: 2,
      title: "<b>Best Innovative Project</b> at inter college project presentation - 2014"
    }
  ]; 

  ngOnInit(): void {
  }

}
