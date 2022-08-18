import {
  Component,
  Input,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { imagesTerrain } from '@core/interfaces/interface';
import { slideHome } from '@core/data/terrainData';
import { slides } from '@shared/constants/terrains-detail';
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { environment } from '@env';
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-slider-main',
  templateUrl: './slider-main.component.html',
  styleUrls: ['./slider-main.component.scss'],
})
export class SliderMainComponent implements OnInit {
  blobUrl: string = environment.blobUrl;
  sliderMain = slideHome;
  slideHome = [];
  @ViewChild('terrainsSwiper') terrainsSwiper: any;
  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  @Output() indexChange = new EventEmitter();
  index: number = 0;
  slideIMG = slides;
  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
  };
  config: SwiperConfigInterface = {
    slidesPerView: 1,
    pagination: this.pagination,
    navigation: true,
    loop: true,
    autoplay: { delay: 5000 },
  };
  @Input() maxHeight;
  constructor() {}

  ngOnInit(): void {
    this.slideHome = this.sliderMain;
  }
  sectionScrollRes() {
    let section = document.getElementById('form') as HTMLElement;
    section.scrollIntoView({ behavior: 'smooth' });
  }

  swiperIndexChange(event): void {
    this.indexChange.emit(event);
  }
}
