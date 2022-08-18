import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TransferHttpCacheModule } from '@nguniversal/common';
@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRouting,
    CoreModule,
    NgxSpinnerModule,
    TransferHttpCacheModule,
    BrowserTransferStateModule,
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [],
})
export class AppModule {}
