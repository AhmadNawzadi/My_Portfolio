import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  email : string = "nawzadi100@gmail.com"
  phone : string = "+33 (0) 758825745"
  address : string = "Nantes, France"

  path_url : string = "htpp://localhost:4200/"

  faEnvelope = faEnvelope
  faPhone = faPhone
  faMapPin = faMapPin
}
