import { ITerrainData, ITerrainsData } from '@core/interfaces/interface';
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { terrainsData } from '@core/data/terrainData';
import { environment } from '@env';
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-terrain-card',
  templateUrl: './terrain-card.component.html',
  styleUrls: ['./terrain-card.component.scss'],
})
export class TerrainCardComponent implements OnInit {
  blobUrl: string = environment.blobUrl;
  index: number = 0;

  indexGroup: any = {};
  terrains: any[] = [];
  terrainsCard: ITerrainsData = terrainsData;

  cardTerrain: ITerrainData;
  cards = [];
  @Input() ifSlider: boolean;
  @Input() ifSliderIMG: boolean;
  @ViewChild('projectSwiper') projectSwiper: any;
  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
  };
  configSlider: SwiperConfigInterface = {
    slidesPerView: 2,
    pagination: this.pagination,
    navigation: true,
    centeredSlides: false,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      1152: {
        slidesPerView: 2,
      },
    },
  };
  //
  @ViewChild('projectIMGSwiper') projectIMGSwiper: any;
  configSliderIMG: SwiperConfigInterface = {
    slidesPerView: 1,
    navigation: true,
    centeredSlides: false,
    loop: true,
  };
  constructor() {}

  ngOnInit(): void {
    this.initTerrains();
    //console.log(this.terrains[0].projectName);
  }
  initTerrains(): void {
    this.terrains = [];
    Object.keys(this.terrainsCard).forEach((terrain) => {
      this.terrains.push(this.terrainsCard[terrain]);
    });
    if (this.ifSliderIMG) {
      this.setIndex();
    }
  }
  setIndex(): void {
    this.terrains.map((item, index) => {
      this.indexGroup[index] = 0;
    });
  }
  nextSlide(): void {
    this.componentRef.directiveRef.nextSlide();
  }
  prevSlide(): void {
    this.componentRef.directiveRef.prevSlide();
  }
  indexChange(event, index) {
    this.indexGroup[index] = event;
  }
  changeDistrict(districtId: number): void {
    if (districtId === 0) {
      this.initTerrains();
    } else {
      this.terrains = [];
      Object.keys(this.terrainsCard).forEach((terrain) => {
        if (this.terrainsCard[terrain].index === districtId) {
          this.terrains.push(this.terrainsCard[terrain]);
        }
      });
    }
  }
}
