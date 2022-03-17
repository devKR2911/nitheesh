import { Component, OnInit } from '@angular/core';
import aboutMe from '../../../assets/data/about-me';
import { ToastService } from '../../shared/services/toast/toast.service';

@Component({
  selector: 'app-resume-additional-information',
  templateUrl: './resume-additional-information.component.html',
  styleUrls: ['./resume-additional-information.component.scss']
})
export class ResumeAdditionalInformationComponent implements OnInit {

  constructor(public toastService: ToastService) { }
  user = aboutMe;

  copyToClipBoard(text: string, type: string) {
    this.toastService.show(
      `${type} has been copied to clipboard`,
      { classname: 'bg-info text-light', delay: 8000 },
    );
    navigator.clipboard.writeText(text);
  }

  ngOnInit(): void {
  }

}
