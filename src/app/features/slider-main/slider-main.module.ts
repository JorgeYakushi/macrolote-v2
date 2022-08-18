import { NgModule } from '@angular/core';
import { SliderMainComponent } from './slider-main.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
@NgModule({
  declarations: [SliderMainComponent],
  imports: [SwiperModule],
  exports: [SliderMainComponent],
})
export class SliderMainModule {}
