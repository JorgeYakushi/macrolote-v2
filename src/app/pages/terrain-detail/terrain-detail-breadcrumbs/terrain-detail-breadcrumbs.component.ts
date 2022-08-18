import { Component, Input, OnInit } from '@angular/core';
import { ITerrainData } from '@core/interfaces/interface';
@Component({
  selector: 'app-terrain-detail-breadcrumbs',
  templateUrl: './terrain-detail-breadcrumbs.component.html',
  styleUrls: ['./terrain-detail-breadcrumbs.component.scss'],
})
export class TerrainDetailBreadcrumbsComponent implements OnInit {
  @Input() terrainData: ITerrainData;
  terrainName ={};
  constructor() {}

  ngOnInit(): void {
    this.terrainName = this.terrainData.name;
  }
}
