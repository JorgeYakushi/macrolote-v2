import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ITerrainData } from '@core/interfaces/interface';
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
} from 'ngx-swiper-wrapper';
import { environment } from '@env';
import SwiperCore, { Navigation, Thumbs, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Thumbs, Pagination]);

@Component({
  selector: 'app-terrain-detail-slider',
  templateUrl: './terrain-detail-slider.component.html',
  styleUrls: ['./terrain-detail-slider.component.scss'],
})
export class TerrainDetailSliderComponent implements OnInit {
  bloblUrl: string = environment.blobUrl;
  @Input() terrainData: ITerrainData;
  slider;
  @ViewChild('bannerDetailProject') bannerDetailProject: any;
  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  index: number = 0;

  config: SwiperConfigInterface = {
    navigation: true,
    pagination: true,
    centeredSlides: true,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        effect: 'slide',
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        },
      },
      1024: {
        slidesPerView: 2,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        },
      },
    },
  };

  constructor() {}

  ngOnInit(): void {
    this.slider = this.terrainData.imagenes;
  }
}
