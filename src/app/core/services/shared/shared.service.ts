import { Injectable } from '@angular/core';
import { IUtm } from '@core/interfaces/utm.interface';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  isServer: boolean = false;
  utmParams: IUtm;
  getIsServer(): boolean {
    return this.isServer;
  }
  setIsServer(): void {
    this.isServer = true;
  }
  getUtmParams(): IUtm {
    return this.utmParams;
  }
  setUtmParams(params: IUtm) {
    this.utmParams = params;
  }
}
