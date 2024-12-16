import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DispositivoService } from '../services/dispositivo.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dispositivo',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
  templateUrl: './dispositivo.page.html',
  providers: [DispositivoService],
})
export class DispositivoPage {
  nombre: string = '';
  ubicacion: string = '';
  dispositivoId: string;
  ultimaMedicion: number = 0;
  valvulaAbierta: boolean = false; // Estado inicial de la válvula

  constructor(private route: ActivatedRoute, private dispositivoService: DispositivoService) {
    this.dispositivoId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit() {
    this.dispositivoService.obtenerDetalleDispositivo(this.dispositivoId).subscribe((data) => {
      this.nombre = data.nombre;
      this.ubicacion = data.ubicacion;
    });
    this.registrarNuevaMedicion();
  }

  registrarNuevaMedicion() {
    this.ultimaMedicion = parseFloat((Math.random() * 100).toFixed(2)); // Genera humedad entre 0 y 100
    this.dispositivoService
      .registrarMedicion(this.dispositivoId, this.ultimaMedicion)
      .subscribe(() => {
        console.log(`Nueva medición registrada: ${this.ultimaMedicion}%`);
      });
  }

  onoff() {
    // Invertimos el estado de la válvula
    this.valvulaAbierta = !this.valvulaAbierta;

    // Enviamos la acción al backend
    this.dispositivoService
      .registrarRiego(this.dispositivoId, this.valvulaAbierta, this.ultimaMedicion)
      .subscribe(() => {
        alert(`Válvula ${this.valvulaAbierta ? 'abierta' : 'cerrada'} correctamente`);
      });
  }


}

