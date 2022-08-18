import { NgModule } from '@angular/core';
import { HomeTerrainComponent } from './home-terrain.component';
import { TerrainCardModule } from '@features/terrain-card/terrain-card.module';
import { TerrainBoxModule } from '@features/terrain-box/terrain-box.module';
@NgModule({
  declarations: [HomeTerrainComponent],
  imports: [TerrainCardModule, TerrainBoxModule],
  exports: [HomeTerrainComponent],
})
export class HomeTerrainModule {}
