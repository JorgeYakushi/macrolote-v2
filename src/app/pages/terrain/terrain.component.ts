import { Component, Input, OnInit } from '@angular/core';
import { ITerrainData } from '@core/interfaces/interface';
import { environment } from '@env';
@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.scss'],
})
export class TerrainComponent implements OnInit {
  blobUrl: string = environment.blobUrl;
  @Input() terrainData: ITerrainData;
  ifSlider: boolean = false;
  ifSliderIMG: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
