import { Component } from '@angular/core';
import { CircularProgressComponent } from "../circular-progress/circular-progress.component";
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CircularProgressComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  constructor(private data: ProjectService) {

  }

}
