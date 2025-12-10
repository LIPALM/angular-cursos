import { Country } from './../interfaces/country.interface';
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { RESTCountry } from "../interfaces/rest-countries.interface";
import { catchError, delay, map, Observable, of, tap, throwError } from "rxjs";
import { CountryMapper } from "../mapper/country.mapper";

const baseUrl = 'https://restcountries.com/v3.1';

@Injectable ({
  providedIn: 'root'
})
export class CountryService {
  private http = inject( HttpClient );
  private queryCacheCapital = new Map<string, Country[]> (); // esto es un objecto vacio {}
  private queryCacheCountry = new Map<string, Country[]> (); // esto es un objecto vacio {}
  private queryCacheRegion = new Map<string, Country[]> (); // esto es un objecto vacio {}

  searchByCapital ( query: string ): Observable<Country[]> {
    query = query.toLowerCase()
    // console.log(`Capital query: ${query}`);
    // return of([]);

    console.log(this.queryCacheCapital);

    if ( this.queryCacheCapital.has(query)) {
      return of ( this.queryCacheCapital.get( query ) ?? [] );
    }

    // console.log(`searching capital countries from API: ${ query }`);

    return this.http.get<RESTCountry[]>(`${ baseUrl }/capital/${ query }`).pipe(
      map( (resp) => CountryMapper.mapRestCountriesToCountryArray(resp)),
      tap( countries => this.queryCacheCapital.set( query, countries ) ),

      catchError( error => {
        console.log( 'Error en el servicio', error)
        return throwError(
          () => new Error( `Error searching countries by capital: ${ query }` )
        );
      })
    );
  }

  searchByCountry ( query: string ) {

    console.log(this.queryCacheCountry);

    if ( this.queryCacheCountry.has(query)) {
      return of ( this.queryCacheCountry.get( query ) ?? [] );
    }

    console.log(`searching country from API: ${ query }`);

    // const url = `${ baseUrl }/name/${ query }`;
    const url = `${ baseUrl }/name/${ query }`;
    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountriesToCountryArray(resp)),

      tap( countries => this.queryCacheCountry.set( query, countries ) ),
      delay(5000),
      catchError( (error) => {
        console.log( 'Error en el servicio', error)

        return throwError(
          () => new Error( `Error searching countries by name: ${ query }`)
        )
      })
    )
  }

  // const url = `${ baseUrl }/name/${ query }`;
  searchByCountryAlphaCode ( code: string ) {
    const url = `${ baseUrl }/alpha/${ code }`;

    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountryToViewSingle(resp)),
      catchError( (error) => {
        console.log( 'Error en el servicio', error)

        return throwError(
          () => new Error( `No se pudo obtener paises con ese codigo: ${ code }`)
        )
      })
    )
  }

  searchByRegion ( region: string ) {
    const url = `${ baseUrl }/region/${ region }`;

    if ( this.queryCacheRegion.has(region)) {
      return of ( this.queryCacheRegion.get( region ) ?? [] );
    }

    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountriesToCountryArray(resp)),
      tap( countries => this.queryCacheRegion.set( region, countries ) ),
      catchError( (error) => {
        console.log( 'Error en el servicio', error)
        return throwError(
          () => new Error(`Error searching countries by region: ${region} `)
        )
      })
    )
  }
}
