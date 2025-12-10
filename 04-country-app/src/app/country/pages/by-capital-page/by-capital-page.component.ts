import { ActivatedRoute, Router } from '@angular/router';
import { Component, effect, inject, linkedSignal, resource, signal } from '@angular/core';
import { CountrySearch } from "../../components/country-search/country-search.component";
import { CountryListComponent } from "../../components/country-list.component/country-list.component";
import { CountryService } from '../../services/country.service';
import { count, firstValueFrom, of } from 'rxjs';
import { RESTCountry } from '../../interfaces/rest-countries.interface';
import { CountryMapper } from '../../mapper/country.mapper';
import { Country } from '../../interfaces/country.interface';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital',
  imports: [CountrySearch, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})


export class ByCapitalPageComponent {

  countryService = inject( CountryService );
  activatedRoute = inject( ActivatedRoute );
  router = inject( Router );

  // Leer query de URL o localStorage
  private getInitialQuery(): string {
    const urlQuery = this.activatedRoute.snapshot.queryParamMap.get('query');
    const storedQuery = localStorage.getItem('by-capital-query');
    return urlQuery || storedQuery || '';
  }

  query = linkedSignal(() => this.getInitialQuery());

  constructor() {
    // Sincronizar URL y localStorage cuando cambia el query
    effect(() => {
      const currentQuery = this.query();
      
      // Guardar en localStorage
      if (currentQuery) {
        localStorage.setItem('by-capital-query', currentQuery);
      } else {
        localStorage.removeItem('by-capital-query');
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
      console.log ( { query: request.query } );
      if ( !request.query ) return of([]);

      return this.countryService.searchByCapital( request.query)
    }
  })

  // isLoading = signal(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([]);

  // onSearch( query: string ) {

  //   if (this.isLoading()) return;

  //   this.isLoading.set( true );
  //   this.isError.set( null );

  //   this.countryService.searchByCapital( query )
  //   .subscribe({
  //     next: ( countries ) => {
  //       this.countries.set(countries);
  //       this.isLoading.set(false);
  //       console.log(countries);
  //     },
  //     error: ( err ) => {
  //       console.log(err);
  //       this.isLoading.set(false);
  //       // this.isError.set( `No results found: ${query}` );
  //       this.isError.set(err );
  //       this.countries.set( [] );
  //     }
  //   });
  // }
}

