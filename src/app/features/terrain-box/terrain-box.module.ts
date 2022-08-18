import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TerrainBoxComponent } from './terrain-box.component';


@NgModule({
  declarations: [TerrainBoxComponent],
  imports: [
    CommonModule],
  exports: [TerrainBoxComponent],
})
export class TerrainBoxModule { }
