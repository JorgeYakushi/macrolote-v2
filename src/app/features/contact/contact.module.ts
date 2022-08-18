import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FormModule } from '@features/form/form.module';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,FormModule
  ],
  exports:[ContactComponent]
})
export class ContactModule { }
