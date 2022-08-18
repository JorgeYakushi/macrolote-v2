import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { terrainsData } from '@core/data/terrainData';
import { ITerrainData } from '@core/interfaces/interface';

@Component({
  selector: 'app-terrain-detail',
  templateUrl: './terrain-detail.component.html',
  styleUrls: ['./terrain-detail.component.scss'],
})
export class TerrainDetailComponent implements OnInit {
  terrainName: string;
  loading: boolean = false;
  terrainData: ITerrainData;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.terrainData = terrainsData[params.get('terrainName')];
      if (!this.terrainData) window.location.href = '404';
    });
  }
}
