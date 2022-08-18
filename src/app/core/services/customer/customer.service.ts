import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpServiceService } from '../http-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpService: HttpServiceService) {}

  get(): Observable<any[]> {
    let url = `${environment.apiBase}/customer/lands`;
    return this.httpService.get<any>(url);
  }

  post(body: any): Observable<boolean> {
    let url = `${environment.apiBase}/customer`;
    return this.httpService.post<boolean>(`${url}`, body);
  }
}
