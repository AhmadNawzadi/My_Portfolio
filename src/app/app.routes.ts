import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { SkillsComponent } from '../app/pages/skills/skills.component'
import { ProjectComponent } from '../app/pages/project/project.component';
import { ProjectDetailsComponent } from '../app/pages/project-details/project-details.component';
import { SkillDetailsComponent } from './pages/skill-details/skill-details.component';

export const routes: Routes = [
    {
        path: '', component : HomeComponent
    },
    {
        path: 'about', component : AboutComponent
    },
    {
        path: 'service', component : ServiceComponent
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
        path: 'details', component : ProjectDetailsComponent
    },
    {
        path: 'skills/:id', component : SkillDetailsComponent 
    }
];
