import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
    {
        path: 'home', component : HomeComponent
    },
    {
        path: 'about', component : AboutComponent
    },
    {
        path: 'service', component : ServiceComponent
    },
    {
        path: 'portfolio', component : PortfolioComponent
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

 
];
