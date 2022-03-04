import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeLayoutRoutingModule } from './resume-layout-routing.module';
import { ResumeLayoutComponent } from './resume-layout.component';
import { ResumeAboutMeComponent } from './resume-about-me/resume-about-me.component';
import { ResumeExperienceComponent } from './resume-experience/resume-experience.component';
import { ResumeEducationComponent } from './resume-education/resume-education.component';
import { ResumeProjectsComponent } from './resume-projects/resume-projects.component';
import { ResumeSkillsComponent } from './resume-skills/resume-skills.component';
import { ResumeTrainingComponent } from './resume-training/resume-training.component';
import { ResumeDeclarationComponent } from './resume-declaration/resume-declaration.component';
import { ResumeAdditionalInformationComponent } from './resume-additional-information/resume-additional-information.component';



@NgModule({
  declarations: [
    ResumeLayoutComponent,
    ResumeAboutMeComponent,
    ResumeExperienceComponent,
    ResumeEducationComponent,
    ResumeProjectsComponent,
    ResumeSkillsComponent,
    ResumeTrainingComponent,
    ResumeDeclarationComponent,
    ResumeAdditionalInformationComponent,
  ],
  imports: [
    CommonModule,
    ResumeLayoutRoutingModule,
  ]
})
export class ResumeLayoutModule { }
