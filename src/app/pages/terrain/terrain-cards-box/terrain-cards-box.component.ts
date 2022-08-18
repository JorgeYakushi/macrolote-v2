import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TerrainCardComponent } from '@features/terrain-card/terrain-card.component';
@Component({
  selector: 'app-terrain-cards-box',
  templateUrl: './terrain-cards-box.component.html',
  styleUrls: ['./terrain-cards-box.component.scss'],
})
export class TerrainCardsBoxComponent implements OnInit {
  @Input() ifSlider: boolean = false;
  districtId: number = 0;
  @Input() ifSliderIMG: boolean = true;
  @ViewChild(TerrainCardComponent) terrainCardComp: TerrainCardComponent;
  constructor() {}

  ngOnInit(): void {}
  districtChange(): void {
    this.terrainCardComp.changeDistrict(this.districtId);
  }
}
