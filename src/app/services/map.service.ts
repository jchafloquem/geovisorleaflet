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
      center: [-12.05, -77.05], // Coordenadas iniciales de ejemplo
      zoom: 15,
      zoomControl: false
    });

    const tiles = L.tileLayer('https://{s}.google.com/vt/lyrs=s&hl=es&x={x}&y={y}&z={z}', {
      maxZoom: 24,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; <a href="https://www.google.com/permissions/geoguidelines/">Google Maps</a>'
    });

    tiles.addTo(this.map);
  }

  getMap(): L.Map | undefined {
    return this.map;
  }
}
