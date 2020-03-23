import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isAdmin: boolean;

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): Observable<any> {
    if (username === 'admin' && password === 'admin') {
      const data = 'jwt';
      this.isAdmin = true;
      return of(data).pipe(delay(1000));
    } else {
      return this.http.get('invalid-url');
    }
  }
}
