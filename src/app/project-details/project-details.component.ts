import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

  constructor(private data: ProjectService) {
    this.projectManagement = data.projectManagement
    this.gameUp = data.gameUp
    this.electricitySystem = data.electricitySystem
  }

  projectManagement : boolean = false
  gameUp : boolean = false
  electricitySystem : boolean = false

}
