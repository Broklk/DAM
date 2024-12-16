import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicionService {
  private apiUrl = 'http://localhost:8000/dispositivo/mediciones';

  constructor(private http: HttpClient) {}

  obtenerMediciones(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
