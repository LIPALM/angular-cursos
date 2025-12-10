import { Component, effect, inject, input, linkedSignal, resource, signal } from '@angular/core';
import { CountrySearch } from "../../components/country-search/country-search.component";
import { CountryListComponent } from "../../components/country-list.component/country-list.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'by-country-page.component',
  imports: [CountrySearch, CountryListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  countryService = inject( CountryService );
  activatedRoute = inject( ActivatedRoute );
  router = inject( Router );

  // Leer query de URL o localStorage
  private getInitialQuery(): string {
    const urlQuery = this.activatedRoute.snapshot.queryParamMap.get('query');
    const storedQuery = localStorage.getItem('by-country-query');
    return urlQuery || storedQuery || '';
  }

  query = linkedSignal(() => this.getInitialQuery());

  constructor() {
    // Sincronizar URL y localStorage cuando cambia el query
    effect(() => {
      const currentQuery = this.query();
      
      // Guardar en localStorage
      if (currentQuery) {
        localStorage.setItem('by-country-query', currentQuery);
      } else {
        localStorage.removeItem('by-country-query');
      }
      
      // Actualizar URL
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: { query: currentQuery || null },
        queryParamsHandling: 'merge',
        replaceUrl: true
      });
    });
  }


  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({request}) => {
      if ( !request.query ) return of([]);

      return this.countryService.searchByCountry( request.query)
    }
  })
  // placeholder = input('Search country by name');
  // onSearch( value: string ) {
  //   console.log ({ value });
  // }
}
