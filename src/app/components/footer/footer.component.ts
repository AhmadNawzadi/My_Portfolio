import { OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  isDarkMode = false;

  ngOnInit(): void {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.updateBodyClass();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateBodyClass();
  }

  private updateBodyClass(): void {
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      const link = body.querySelector('a');
      if (link) {
        link.style.color = 'white';
      }
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }
  }
}
