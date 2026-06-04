import { Component } from '@angular/core';
import { CircularProgressComponent } from '../../components/circular-progress/circular-progress.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills-technical',
  standalone: true,
  imports: [
        CircularProgressComponent,
        RouterModule
  ],
  templateUrl: './skills-technical.component.html',
  styleUrl: './skills-technical.component.scss'
})
export class SkillsTechnicalComponent {

}
