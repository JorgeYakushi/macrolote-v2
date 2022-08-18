import { Component, Input, OnInit } from '@angular/core';
import { IDescription, ITerrainData } from '@core/interfaces/interface';
import { environment } from '@env';
@Component({
  selector: 'app-terrain-detail-information',
  templateUrl: './terrain-detail-information.component.html',
  styleUrls: ['./terrain-detail-information.component.scss'],
})
export class TerrainDetailInformationComponent implements OnInit {
  @Input() terrainData: ITerrainData;
  blobUrl: string = environment.blobUrl;
  constructor() {}

  ngOnInit(): void {}
}
