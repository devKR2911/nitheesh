import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeLayoutRoutingModule } from './resume-layout-routing.module';
import { ResumeLayoutComponent } from './resume-layout.component';



@NgModule({
  declarations: [
    ResumeLayoutComponent,
  ],
  imports: [
    CommonModule,
    ResumeLayoutRoutingModule,
  ]
})
export class ResumeLayoutModule { }
