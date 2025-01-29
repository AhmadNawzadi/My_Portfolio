import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-circular-progress',
  standalone: true,
  imports: [],
  templateUrl: './circular-progress.component.html',
  styleUrl: './circular-progress.component.scss'
})
export class CircularProgressComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('circularBar', { static: false }) circularBar!: ElementRef;
  @ViewChild('percentValue', { static: false }) percentValue!: ElementRef;
  initialValue = 0;
  speed = 10;
  interval: any;

  @Input() finaleValue: number = 0; 


  ngOnInit() {
  }

  ngAfterViewInit() {
    this.startProgress();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startProgress() {
    this.interval = setInterval(() => {
      this.initialValue += 1;

      this.circularBar.nativeElement.style.background = `conic-gradient(#00abf0 ${(this.initialValue / 100) * 360}deg, #e8f0f7 0deg)`;
      this.percentValue.nativeElement.innerHTML = this.initialValue + "%";

      if (this.initialValue >= this.finaleValue) {
        clearInterval(this.interval);
      }
    }, this.speed);
  }

}


