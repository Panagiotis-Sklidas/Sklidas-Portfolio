import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-me',
    component: ExperienceComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'certifications',
    component: CertificationsComponent,
  },
  {
    path: 'contact-me',
    component: ContactMeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
