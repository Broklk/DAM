import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DispositivoService {
  private apiUrl = 'http://localhost:8000/dispositivo';

  constructor(private http: HttpClient) {}

  obtenerDispositivos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  obtenerDetalleDispositivo(id: string): Observable<any> {
    return this.http.get<any>(`/dispositivos/${id}`);
  }

  registrarRiego(id: string, apertura: boolean, humedad: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/registrar-riego`, { apertura, humedad });
  }

  registrarMedicion(id: string, humedad: number) : Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/registrar-medicion`, { humedad });
  }
}
