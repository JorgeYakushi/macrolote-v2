import { Component, Input, OnInit } from '@angular/core';
import { slideHome } from '@core/data/terrainData';
@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
})
export class HomeHeroComponent implements OnInit {
  constructor() {}
  index: number = 0;
  heroText: any[] = slideHome;
  ngOnInit(): void {}
  sectionScroll() {
    let section = document.getElementById('2') as HTMLElement;
    section.scrollIntoView({ behavior: 'smooth' });
  }
  sectionScrollRes() {
    let section = document.getElementById('form') as HTMLElement;
    section.scrollIntoView({ behavior: 'smooth' });
  }
  indexChange(event): void {
    this.index = event;
  }
}
