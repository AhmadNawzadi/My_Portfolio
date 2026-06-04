import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { SkillDetailsComponent } from './pages/skill-details/skill-details.component';
import { ParcoursComponent } from './pages/parcours/parcours.component';
import { ParcoursDetailsComponent } from './pages/parcours-details/parcours-details.component';
import { SkillsTechnicalComponent } from './pages/skills-technical/skills-technical.component';
import { SkillsNonTechnicalComponent } from './pages/skills-non-technical/skills-non-technical.component';

export const routes: Routes = [
    {
        path: '', component : HomeComponent
    },
    {
        path: 'about', component : AboutComponent
    },
    {
        path: 'projects', component : ProjectComponent
    },
    {
        path: 'contact', component : ContactComponent
    },
    {
        path: 'skills', component : SkillsComponent
    },
        {
        path: 'skills/technique', component : SkillsTechnicalComponent
    },
        {
        path: 'skills/nontechnique', component : SkillsNonTechnicalComponent
    },
    {
        path: 'details/:id', component : ProjectDetailsComponent
    },
    {
        path: 'skills/:id', component : SkillDetailsComponent 
    },
    {
        path: 'parcours', component : ParcoursComponent
    }, 
    {
        path: 'parcours/:id', component : ParcoursDetailsComponent
    }, 
];
