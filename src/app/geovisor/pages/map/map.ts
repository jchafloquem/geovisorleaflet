import { Component, AfterViewInit, inject } from '@angular/core';
import { Navbar } from '../../../components/navbar/navbar';
import { MapService } from '../../../services/map.service';


@Component({
  selector: 'app-map',
  imports: [
    Navbar
  ],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map implements AfterViewInit {
  private mapService = inject(MapService);

  ngAfterViewInit(): void {
    this.mapService.initMap('map');
  }
}
