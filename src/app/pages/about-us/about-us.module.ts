import { NgModule } from '@angular/core';
import { AboutUsRouting } from './about-us.routing';
import { AboutUsComponent } from './about-us.component';
import { AboutUsHeroComponent } from './about-us-hero/about-us-hero.component';
import { AboutUsCommitmentComponent } from './about-us-commitment/about-us-commitment.component';
import { HomeTerrainModule } from '@pages/home/home-terrain/home-terrain.module';
import { AboutUsTeamComponent } from './about-us-team/about-us-team.component';
import { SliderMainModule } from '@features/slider-main/slider-main.module';
import { ContactModule } from '@features/contact/contact.module';
@NgModule({
  declarations: [
    AboutUsComponent,
    AboutUsHeroComponent,
    AboutUsCommitmentComponent,
    AboutUsTeamComponent,
  ],
  imports: [AboutUsRouting, SliderMainModule, HomeTerrainModule, ContactModule],
  exports: [],
})
export class AboutUsModule {}
