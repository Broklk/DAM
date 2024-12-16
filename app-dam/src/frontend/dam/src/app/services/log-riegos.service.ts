import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogRiegosService {
  private apiUrl = 'http://localhost:8000/log-riegos';

  constructor(private http: HttpClient) {}

  obtenerLogRiegos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
