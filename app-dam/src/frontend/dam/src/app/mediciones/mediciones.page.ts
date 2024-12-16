import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicionService } from '../services/mediciones.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormatFechaPipe } from '../pipes/format-fecha.pipe';

@Component({
  selector: 'app-mediciones',
  standalone: true,
  imports: [IonicModule, CommonModule, FormatFechaPipe],
  templateUrl: './mediciones.page.html',
  providers: [MedicionService],
})
export class MedicionesPage {
  dispositivoId: string;
  mediciones: any[] = [];
  nombre: string = '';
  ubicacion: string = '';

  constructor(private route: ActivatedRoute, private medicionService: MedicionService) {
    this.dispositivoId = this.route.snapshot.paramMap.get('id') || '';
    this.nombre = this.route.snapshot.queryParamMap.get('nombre') || '';
    this.ubicacion = this.route.snapshot.queryParamMap.get('ubicacion') || '';
  }

  ngOnInit() {
    this.medicionService.obtenerMediciones(this.dispositivoId).subscribe((data) => {
      this.mediciones = data;
    });
  }
}
