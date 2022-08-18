import {
  AfterViewInit,
  Component,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { SharedService } from '@core/services/shared/shared.service';
@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
})
export class InfoBoxComponent implements OnInit, AfterViewInit {
  @ViewChild('boxContainer', { static: false }) public boxContainer: ElementRef;
  counter1: number = 0;
  counter2: number = 0;
  counter3: number = 0;
  counter4: number = 0;

  target1: number = 91;
  target2: number = 100;
  target3: number = 1000;
  target4: number = 8;

  observer: any;

  ctaItem: HTMLElement;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    if (!this.sharedService.getIsServer()) {
      this.setObserver();
      this.initObserver();
    }
  }

  private setObserver(): void {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.counterFunc();
        }
      });
    }, {});
  }
  initObserver(): void {
    this.observer.observe(this.boxContainer.nativeElement);
  }
  counterFunc(): void {
    let timer1, timer2, timer3, timer4;
    let steps1 = Math.abs(this.target1 / 40);
    let steps2 = Math.abs(Math.floor(this.target2 / 40));
    let steps3 = Math.abs(Math.floor(this.target3 / 40));
    let steps4 = Math.abs(this.target4 / 40);
    timer1 = setInterval(() => {
      this.counter1 += steps1;
      if (Math.floor(this.counter1) === Math.floor(this.target1))
        clearInterval(timer1);
    }, 20);
    timer2 = setInterval(() => {
      this.counter2 += steps2;
      if (this.counter2 === this.target2) clearInterval(timer2);
    }, 20);
    timer3 = setInterval(() => {
      this.counter3 += steps3;
      if (this.counter3 === this.target3) clearInterval(timer3);
    }, 20);
    timer4 = setInterval(() => {
      this.counter4 += steps4;
      if (Math.floor(this.counter4) === Math.floor(this.target4))
        clearInterval(timer4);
    }, 20);
    let cta__items = document.getElementById('cta__items');
    this.observer.unobserve(cta__items);
  }
}
