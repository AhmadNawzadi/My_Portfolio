import { Component } from '@angular/core';
import { CircularProgressComponent } from '../../components/circular-progress/circular-progress.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CircularProgressComponent,
    RouterModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


}
