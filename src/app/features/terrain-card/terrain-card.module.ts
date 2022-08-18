import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerrainCardComponent } from './terrain-card.component';
import { SwiperModule } from 'ngx-swiper-wrapper';



@NgModule({
  declarations: [TerrainCardComponent],
  imports: [
    CommonModule, SwiperModule
  ],
  exports: [TerrainCardComponent],
})
export class TerrainCardModule { }
