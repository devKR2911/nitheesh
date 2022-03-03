import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeLayoutComponent } from './resume-layout/resume-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./personal-details/personal-details.module').then(m => m.PersonalDetailsModule)
  },
  { path: 'resume', component: ResumeLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
