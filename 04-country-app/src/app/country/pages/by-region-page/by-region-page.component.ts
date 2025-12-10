import { Component, effect, inject, linkedSignal, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list.component/country-list.component";
import { RegionViewComponent } from "../../components/region-view/region-view.component";
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania' | 'Antarctic';

@Component({
  selector: 'by-region-page.component',
  imports: [CountryListComponent, RegionViewComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  private countryService = inject(CountryService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  // Leer región de URL o localStorage
  private getInitialRegion(): Region | '' {
    const urlRegion = this.activatedRoute.snapshot.queryParamMap.get('region') as Region | null;
    const storedRegion = localStorage.getItem('by-region-selected') as Region | null;
    return urlRegion || storedRegion || '';
  }

  selectedRegion = linkedSignal(() => this.getInitialRegion());

  constructor() {
    // Sincronizar URL y localStorage cuando cambia la región
    effect(() => {
      const currentRegion = this.selectedRegion();
      
      // Guardar en localStorage
      if (currentRegion) {
        localStorage.setItem('by-region-selected', currentRegion);
      } else {
        localStorage.removeItem('by-region-selected');
      }
      
      // Actualizar URL
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: { region: currentRegion || null },
        queryParamsHandling: 'merge',
        replaceUrl: true
      });
    });
  }

  countryResource = rxResource({
    request: () => ({ region: this.selectedRegion() }),
    loader: ({ request }) => {
      if (!request.region) return of([]);
      
      return this.countryService.searchByRegion(request.region);
    }
  });

  onRegionSelected(region: Region): void {
    this.selectedRegion.set(region);
  }
}
