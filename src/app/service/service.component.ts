import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode, faCrop, faBrain } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  faCrop = faCrop;
  faCode = faCode
  faBrain = faBrain
}
