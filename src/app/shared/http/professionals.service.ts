import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Professional, Service} from '../models/professional.model';
import {HttpClient} from '@angular/common/http';
import {HttpResourceResponse} from '../models/http-resource-response.model';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService {
  professionals: Professional[] = [
    {
      id: 123,
      fullName: 'string',
      phone: '+3366554477',
      email: 'string@mail.com',
      service: Service.MEDICAL,
      country: 'Tunisia',
      state: 'Tunis',
      county: 'Ariana',
      municipality: '10 decembre',
    }, {
      id: 124,
      fullName: 'string',
      phone: '+3366554477',
      email: 'string@mail.com',
      service: Service.MEDICAL,
      country: 'Tunisia',
      state: 'Tunis',
      county: 'Ariana',
      municipality: '10 decembre',
    }, {
      id: 125,
      fullName: 'string',
      phone: '+3366554477',
      email: 'string@mail.com',
      service: Service.FOOD,
      country: 'Tunisia',
      state: 'Tunis',
      county: 'Ariana',
      municipality: '10 decembre',
    }, {
      id: 126,
      fullName: 'string',
      phone: '+3366554477',
      email: 'string@mail.com',
      service: Service.FOOD,
      country: 'Tunisia',
      state: 'Tunis',
      county: 'Ariana',
      municipality: '10 decembre',
    }, {
      id: 127,
      fullName: 'string',
      phone: '+3366554477',
      email: 'string@mail.com',
      service: Service.FOOD,
      country: 'Tunisia',
      state: 'Tunis',
      county: 'Ariana',
      municipality: '10 decembre',
    }, {
      id: 128,
      fullName: 'string',
      phone: '+3366554477',
      email: 'string@mail.com',
      service: Service.FOOD,
      country: 'Tunisia',
      state: 'Tunis',
      county: 'Ariana',
      municipality: '10 decembre',
    }
  ];

  constructor(private http: HttpClient) {
  }

  find(pageIndex: number, pageSize: number, s: string, filter): Observable<HttpResourceResponse<Professional>> {
    const data = new HttpResourceResponse<Professional>();
    data.elements = this.professionals;
    data.totalElements = this.professionals.length;
    return of(data).pipe(delay(1000));
  }
}
