import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerrainDetailComponent } from './terrain-detail.component';

const routes: Routes = [{ path: '', component: TerrainDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerrainDetailRouting {}
