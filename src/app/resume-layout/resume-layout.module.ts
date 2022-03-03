import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeLayoutRoutingModule } from './resume-layout-routing.module';
import { ResumeLayoutComponent } from './resume-layout.component';
import { ResumeAboutMeComponent } from './resume-about-me/resume-about-me.component';



@NgModule({
  declarations: [
    ResumeLayoutComponent,
    ResumeAboutMeComponent,
  ],
  imports: [
    CommonModule,
    ResumeLayoutRoutingModule,
  ]
})
export class ResumeLayoutModule { }
