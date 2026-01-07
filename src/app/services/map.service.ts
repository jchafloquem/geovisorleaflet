import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map: L.Map | undefined;

  constructor() { }

  initMap(elementId: string): void {
    // Si ya existe una instancia, la limpiamos para evitar conflictos al recargar el componente
    if (this.map) {
      this.map.remove();
    }

    this.map = L.map(elementId, {
      center: [51.505, -0.09], // Coordenadas iniciales de ejemplo
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  getMap(): L.Map | undefined {
    return this.map;
  }
}
