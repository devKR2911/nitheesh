import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { AwardsComponent } from './awards/awards.component';
import { PersonalDetailsComponent } from './personal-details.component';
import { PersonalDetailsRoutingModule } from './personal-details-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    CertificationsComponent,
    AwardsComponent,
    PersonalDetailsComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    PersonalDetailsRoutingModule,
    NgbModule,
  ]
})
export class PersonalDetailsModule { }
