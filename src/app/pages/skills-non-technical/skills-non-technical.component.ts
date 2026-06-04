import { Component } from '@angular/core';
import { CircularProgressComponent } from '../../components/circular-progress/circular-progress.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills-non-technical',
  standalone: true,
  imports: [    
      CircularProgressComponent,
      RouterModule],
  templateUrl: './skills-non-technical.component.html',
  styleUrl: './skills-non-technical.component.scss'
})
export class SkillsNonTechnicalComponent {

}
