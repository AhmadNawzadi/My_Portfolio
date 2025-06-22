import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {

  @Input() name: string = ''
  @Input() link: any[] = [];
  @Input() buttonStyle: { [key: string]: string } = {}

}
