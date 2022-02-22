import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ResumeLayoutComponent } from './resume-layout/resume-layout.component';

const routes: Routes = [
  { path: '', component: PersonalDetailsComponent },
  { path: 'resume', component: ResumeLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
