import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, IonAvatar } from '@ionic/angular/standalone';
import { DispositivoService } from '../services/dispositivo.service';
import { CommonModule } from '@angular/common';
import { ResaltarDirective } from '../directive/resaltar.directive';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonIcon, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, RouterModule, CommonModule, ResaltarDirective],
  providers: [DispositivoService],
})
export class HomePage {

  dispositivos: any[] = [];

  constructor(private dispositivoService: DispositivoService) {}

  ngOnInit() {
    this.dispositivoService.obtenerDispositivos().subscribe((data) => {
      this.dispositivos = data;
    });
  }

}
