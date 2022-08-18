import { NgModule } from '@angular/core';
import { TerrainDetailRouting } from './terrain-detail.routing';
import { TerrainDetailComponent } from './terrain-detail.component';
import { TerrainDetailSliderComponent } from './terrain-detail-slider/terrain-detail-slider.component';
import { TerrainDetailBreadcrumbsComponent } from './terrain-detail-breadcrumbs/terrain-detail-breadcrumbs.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { CommonModule } from '@angular/common';
import { TerrainDetailInformationComponent } from './terrain-detail-information/terrain-detail-information.component';
import { TerrainDetailFeaturesComponent } from './terrain-detail-features/terrain-detail-features.component';
import { TerrainDetailInfoBoxComponent } from './terrain-detail-info-box/terrain-detail-info-box.component';
import { ContactModule } from '@features/contact/contact.module';
@NgModule({
  declarations: [TerrainDetailComponent, TerrainDetailSliderComponent, TerrainDetailBreadcrumbsComponent, TerrainDetailInformationComponent, TerrainDetailFeaturesComponent, TerrainDetailInfoBoxComponent],
  imports: [TerrainDetailRouting, SwiperModule, CommonModule, ContactModule],
  exports: [],
})
export class TerrainDetailModule {}
