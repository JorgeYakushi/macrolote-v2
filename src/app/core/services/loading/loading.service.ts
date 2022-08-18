import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private spinner: NgxSpinnerService) {}
  loading: boolean = false;

  showLoading(): void {
    this.spinner.show();
  }
  hideLoading(): void {
    this.spinner.hide();
  }
}
