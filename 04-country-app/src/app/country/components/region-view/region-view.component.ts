import { Component, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania' | 'Antarctic';

@Component({
  selector: 'region-view-component',
  imports: [],
  templateUrl: './region-view.component.html',
})
export class RegionViewComponent {
  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'];

  // Signal para guardar la región actualmente seleccionada
  selectedRegion = signal<Region | ''>('');

  // Output para emitir la región seleccionada al componente padre
  regionSelected = output<Region>();

  onRegionClick(region: Region): void {
    this.selectedRegion.set(region); // Actualiza el signal
    this.regionSelected.emit(region); // Emite al padre
  }
}
