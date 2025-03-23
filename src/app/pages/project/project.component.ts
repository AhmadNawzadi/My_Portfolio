import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ProjectService } from '../../services/project.service'

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLink,
    RouterModule
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  constructor(private data: ProjectService) {}

  selectProject(pId : number){
    this.data.selectProject(pId)
  }

  faExternalLinkAlt = faExternalLinkAlt
}
