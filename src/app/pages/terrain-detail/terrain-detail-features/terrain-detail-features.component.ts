import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ITerrainData } from '@core/interfaces/interface';
import { HttpClient } from '@angular/common/http';
import { LeafletService } from '@core/services/laeflet/leaflet.service';
import { SharedService } from '@core/services/shared/shared.service';
@Component({
  selector: 'app-terrain-detail-features',
  templateUrl: './terrain-detail-features.component.html',
  styleUrls: ['./terrain-detail-features.component.scss'],
})
export class TerrainDetailFeaturesComponent implements OnInit {
  private map;
  private initMap(): void {
    this.map = this.leafletService.L.map('map', {
      center: [this.lat, this.long],
      zoom: this.zoom,
    });

    const tiles = this.leafletService.L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    );

    tiles.addTo(this.map);
    this.http.get<any>(this.geoJson).subscribe((response) => {
      this.leafletService.L.geoJSON(response).addTo(this.map);
    });
  }

  listFeatures = [];
  terrainName: any;
  districtName: string;
  coordenadas: string;
  lat: any;
  long: any;
  zoom: any;
  geoJson: any;
  // mapKML: any;
  urlSafe: SafeResourceUrl;
  @Input() terrainData: ITerrainData;
  constructor(
    public sanitizer: DomSanitizer,
    private http: HttpClient,
    private leafletService: LeafletService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.terrainName = this.terrainData.name;
    this.districtName = this.terrainData.description.districtName;
    this.listFeatures = this.terrainData.description.estamosaqui;
    this.lat = this.terrainData.lat;
    this.long = this.terrainData.long;
    this.geoJson = this.terrainData.geoJson;
    this.zoom = this.terrainData.zoom;
    if (!this.sharedService.getIsServer()) this.initMap();
  }

  // readMapKML(){
  //   this.mapKML = this.terrainData.kmlMAP;
  //   this.mapKML.suscribe ( contents => {
  //     const baseXml = contents;
  //     const parser = new DOMParser();
  //     const xmlDoc = parser.parseFromString(baseXml, 'text/xml');

  //     const track = new L.KML(xmlDoc, {async: true});
  //     const bounds = track.getBounds();
  //     this.map.fitBounds(bounds);
  //     this.map.addLayer(track);
  //   });
  //   console.log(this.mapKML)
  // }
}
