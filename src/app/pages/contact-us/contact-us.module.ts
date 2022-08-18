import { NgModule } from '@angular/core';
import { ContactUsRouting } from './contact-us.routing';
import { ContactUsComponent } from './contact-us.component';
import { FormModule } from '@features/form/form.module';
@NgModule({
  declarations: [ContactUsComponent],
  imports: [ContactUsRouting, FormModule],
  exports: [],
})
export class ContacUsModule {}
