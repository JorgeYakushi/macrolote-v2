import {
  Component,
  OnInit,
  PLATFORM_ID,
  Injector,
  Inject,
} from '@angular/core';
import { Injectable } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { SharedService } from '@core/services/shared/shared.service';
import { ActivatedRoute } from '@angular/router';
import { IUtm } from '@core/interfaces/utm.interface';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string;
  constructor(
    @Inject(PLATFORM_ID) private platformid: Object,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute
  ) {
    if (isPlatformServer(this.platformid)) {
      this.sharedService.setIsServer();
    } else {
      let utmParams: IUtm = {
        utm_campaign: '',
        utm_content: '',
        utm_medium: '',
        utm_source: '',
        utm_term: '',
      };
      this.activatedRoute.queryParams.subscribe((params) => {
        Object.keys(params).forEach((item) => {
          utmParams[item] = params[item];
        });
      });
      this.sharedService.setUtmParams(utmParams);
    }
  }

  ngOnInit() {}
}
