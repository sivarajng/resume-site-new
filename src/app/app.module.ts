import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { RightPaneComponent } from './right-pane/right-pane.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';

import { appRoutes } from './app.routes';
import { CertificationsComponent } from './certifications/certifications.component';
import { ExperienceComponent } from './experience/experience.component';
import { AcademyComponent } from './academy/academy.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LeftPaneComponent,
    RightPaneComponent,
    NavBarComponent,
    HomeComponent,
    SkillsComponent,
    CertificationsComponent,
    ExperienceComponent,
    AcademyComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
