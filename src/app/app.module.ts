import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutMeComponent } from './personal-details/about-me/about-me.component';
import { ExperienceComponent } from './personal-details/experience/experience.component';
import { EducationComponent } from './personal-details/education/education.component';
import { SkillsComponent } from './personal-details/skills/skills.component';
import { InterestsComponent } from './personal-details/interests/interests.component';
import { CertificationsComponent } from './personal-details/certifications/certifications.component';
import { AwardsComponent } from './personal-details/awards/awards.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ResumeLayoutComponent } from './resume-layout/resume-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    CertificationsComponent,
    AwardsComponent,
    PersonalDetailsComponent,
    ResumeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
