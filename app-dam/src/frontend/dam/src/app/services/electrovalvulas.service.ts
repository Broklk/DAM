import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ElectrovalvulaService {
  private apiUrl = 'http://localhost:8000/electrovalvula';

  constructor(private http: HttpClient) {}

  obtenerElectrovalvula(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
