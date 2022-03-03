import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeLayoutRoutingModule } from './resume-layout-routing.module';
import { ResumeLayoutComponent } from './resume-layout.component';
import { ResumeAboutMeComponent } from './resume-about-me/resume-about-me.component';
import { ResumeExperienceComponent } from './resume-experience/resume-experience.component';
import { ResumeEducationComponent } from './resume-education/resume-education.component';



@NgModule({
  declarations: [
    ResumeLayoutComponent,
    ResumeAboutMeComponent,
    ResumeExperienceComponent,
    ResumeEducationComponent,
  ],
  imports: [
    CommonModule,
    ResumeLayoutRoutingModule,
  ]
})
export class ResumeLayoutModule { }
