import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-terrain',
  templateUrl: './home-terrain.component.html',
  styleUrls: ['./home-terrain.component.scss'],
})
export class HomeTerrainComponent implements OnInit {
  @Input() ifSlider: boolean = true;
  @Input() ifSliderIMG: boolean = false;

  showInfoBox: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.loadIfSlider();
  }
  loadIfSlider() {
    this.ifSlider = this.ifSlider;
    this.ifSliderIMG = this.ifSliderIMG;
  }
}
