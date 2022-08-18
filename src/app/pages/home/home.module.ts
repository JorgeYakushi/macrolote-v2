import { NgModule } from '@angular/core';
import { HomeRouting } from './home.routing';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { FormModule } from '@features/form/form.module';
import { SliderMainModule } from '@features/slider-main/slider-main.module';
import { TerrainCardModule } from '@features/terrain-card/terrain-card.module';
import { HomeQuienesSomosComponent } from './home-quienes-somos/home-quienes-somos.component';
import { HomeQueSonLosMacrolotesComponent } from './home-que-son-los-macrolotes/home-que-son-los-macrolotes.component';
import { InfoBoxModule } from '@features/info-box/info-box.module';
import { HomeTerrainModule } from './home-terrain/home-terrain.module';
import { TerrainBoxModule } from '@features/terrain-box/terrain-box.module';
@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeQuienesSomosComponent,
    HomeQueSonLosMacrolotesComponent,
  ],
  imports: [
    HomeRouting,
    FormModule,
    SliderMainModule,
    TerrainCardModule,
    InfoBoxModule,
    HomeTerrainModule,
    TerrainBoxModule,
    CommonModule,
  ],
  exports: [],
})
export class HomeModule {}
