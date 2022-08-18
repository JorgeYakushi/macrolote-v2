import { Component, Input, OnInit } from '@angular/core';
import { ITerrainData } from '@core/interfaces/interface';
import { environment } from '@env';
@Component({
  selector: 'app-terrain-detail-info-box',
  templateUrl: './terrain-detail-info-box.component.html',
  styleUrls: ['./terrain-detail-info-box.component.scss'],
})
export class TerrainDetailInfoBoxComponent implements OnInit {
  @Input() terrainData: ITerrainData;
  blobUrl: string = environment.blobUrl;
  constructor() {}

  ngOnInit(): void {}
}
