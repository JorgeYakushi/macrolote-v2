import { NgModule } from '@angular/core';
import { NotFoundRouting } from './not-found.routing';
import { NotFoundComponent } from './not-found.component';
import { FormModule } from '@features/form/form.module';
@NgModule({
  declarations: [NotFoundComponent],
  imports: [NotFoundRouting, FormModule],
  exports: [],
})
export class NotFoundModule {}
