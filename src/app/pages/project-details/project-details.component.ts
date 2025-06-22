import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { CustomButtonComponent } from "../../components/custom-button/custom-button.component";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    CommonModule,
    CustomButtonComponent,
    RouterModule,
    RouterOutlet
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
