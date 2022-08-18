import { Component, OnInit } from '@angular/core';
import { detailsProject } from '@shared/constants/terrains-detail';


@Component({
  selector: 'app-terrain-box',
  templateUrl: './terrain-box.component.html',
  styleUrls: ['./terrain-box.component.scss']
})
export class TerrainBoxComponent implements OnInit {
  index: number = 0;
  slides = detailsProject;
  constructor() { }

  ngOnInit(): void {
  }

}
