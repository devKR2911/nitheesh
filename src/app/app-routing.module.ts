import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./personal-details/personal-details.module').then(m => m.PersonalDetailsModule)
  },
  {
    path: 'resume', 
    loadChildren: () => import('./resume-layout/resume-layout.module').then(m => m.ResumeLayoutModule)
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
