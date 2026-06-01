import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';

@Component({
  selector: 'app-parcours-details',
  standalone: true,
  imports: [
        CommonModule,
        CustomButtonComponent,
        RouterOutlet,
        RouterModule
  ],
  templateUrl: './parcours-details.component.html',
  styleUrl: './parcours-details.component.scss'
})
export class ParcoursDetailsComponent {
  aksaray : boolean = false
  simplon : boolean = false
  groupeFbo : boolean = false
  liqtrade : boolean = false
  kabul : boolean = false
  visiplus: boolean = false

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === '1') {
      this.visiplus = true;
    } else if (id === '2') {
      this.groupeFbo = true;
    } else if (id === '3') {
      this.liqtrade = true;
    }else if (id === '4') {
      this.simplon = true;
    } else if (id === '5') {
      this.aksaray = true;
    } else if (id === '6') {
      this.kabul = true;
    }
  }
}
