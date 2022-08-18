import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TerrainRouting } from './terrain.routing';
import { TerrainComponent } from './terrain.component';
import { TerrainHeaderComponent } from './terrain-header/terrain-header.component';
import { SliderMainModule } from '@features/slider-main/slider-main.module';
import { TerrainBoxModule } from '@features/terrain-box/terrain-box.module';
import { TerrainCardModule } from '@features/terrain-card/terrain-card.module';
import { FormModule } from '@features/form/form.module';
import { InfoBoxModule } from '@features/info-box/info-box.module';
import { ContactModule } from '@features/contact/contact.module';
import { TerrainInfoCardComponent } from './terrain-info-card/terrain-info-card.component';
import { TerrainCardsBoxComponent } from './terrain-cards-box/terrain-cards-box.component';
import { TerrainContactComponent } from './terrain-contact/terrain-contact.component';
@NgModule({
  declarations: [
    TerrainComponent,
    TerrainHeaderComponent,
    TerrainCardsBoxComponent,
    TerrainInfoCardComponent,
    TerrainContactComponent,
  ],
  imports: [
    TerrainRouting,
    FormsModule,
    SliderMainModule,
    TerrainBoxModule,
    TerrainCardModule,
    FormModule,
    InfoBoxModule,
    ContactModule,
  ],
  exports: [],
})
export class TerrainModule {}
