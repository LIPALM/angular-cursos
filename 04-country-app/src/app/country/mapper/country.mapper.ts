
import { CountryView } from "../interfaces/country-views.interface";
import { Country } from "../interfaces/country.interface";
import { RESTCountry } from '../interfaces/rest-countries.interface';

export class CountryMapper {
  // stactic RestCountries => Country
  static mapRestCountryToCountry( restCountry: RESTCountry ): Country {
    return {
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      FlagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No Spanish Name',
      capital: restCountry.capital?.join(','),
      population: restCountry.population
    };
  }

  // static RestCountry[] => Country[]
  static mapRestCountriesToCountryArray(
    restCountries: RESTCountry[]
  ): Country[] {
    return restCountries.map( this.mapRestCountryToCountry );
  }

  static mapRestCountryToView(country: RESTCountry): CountryView {
    return {
      cca2: country.cca2,
      cca3: country.cca3,
      name: country.name.common ?? '',
      flagpng: country.flags.png,
      flagsvg: country.flags.svg,
      capital: country.capital.join(''),
      region: country.region,
      subregion: country.subregion,
      population: country.population,
      area: country.area,
      latlng: country.latlng,
      borders: country.borders,
      languages: country.languages ? Object.values(country.languages): undefined,
      currencies: country.currencies
        ? Object.entries(country.currencies).map(([code, cur]) => ({ code, name: cur.name, symbol: cur.symbol }))
        : undefined,
      maps: country.maps ? { gm: country.maps.googleMaps, osm: country.maps.openStreetMaps} : undefined

      //maps: [restView.maps.googleMaps, restView.maps.openStreetMaps]
    };
  }

  static mapRestCountriesToViewArray(
    restCountries: RESTCountry[]
  ): CountryView[] {
    return restCountries.map( this.mapRestCountryToView );
  }

  static mapRestCountryToViewSingle(
    restCountries: RESTCountry[]
  ): CountryView | undefined {
    return restCountries.length > 0
      ? this.mapRestCountryToView(restCountries[0])
      : undefined;
  }
}
