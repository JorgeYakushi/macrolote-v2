import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SucceededComponent } from './succeeded.component';

const routes: Routes = [{ path: '', component: SucceededComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SucceededRouting {}
