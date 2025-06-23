import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { CustomButtonComponent } from "../../components/custom-button/custom-button.component";
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';

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
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {

  constructor(private data: ProjectService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === '1') {
      this.projectManagement = true;
    } else if (id === '2') {
      this.gameUp = true;
    } else if (id === '3') {
      this.electricitySystem = true;
    }
    // this.projectManagement = data.projectManagement
    // this.gameUp = data.gameUp
    // this.electricitySystem = data.electricitySystem
  }

  projectManagement : boolean = false
  gameUp : boolean = false
  electricitySystem : boolean = false

}
