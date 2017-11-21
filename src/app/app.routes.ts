import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ExperienceComponent } from './experience/experience.component';
import { AcademyComponent } from './academy/academy.component';
import { ProjectsComponent } from './projects/projects.component';

const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'certifications', component: CertificationsComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'academy', component: AcademyComponent },
    { path: 'projects', component: ProjectsComponent },

];

export const appRoutes = RouterModule.forRoot(router, { useHash: true });