import { JsonPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {
  fb = inject(FormBuilder);
  countryService = inject(ContryService);


  regions = signal ( this.countryService.regions)
  countryByRegion = signal<Country[]>([])
  bordersByCountry = signal<Country[]>([])

  myForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required]

  })

  onFormChanges = effect ((onCleanUp) => {
    const formRegionChange = this.onRegionChanged();
    const countrySubscription = this.onCountryChanged();

    onCleanUp( () => {
      formRegionChange.unsubscribe();
      countrySubscription.unsubscribe();
    });
  });

  onRegionChanged() {
    return this.myForm
      .get('region')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('country')!.setValue('')),
        tap(() => this.myForm.get('border')!.setValue('')),
        tap(() => {
          this.bordersByCountry.set([]);
          this.countryByRegion.set([]);
        }),
        switchMap( region => this.countryService.getCountriesByRegion( region ?? '' ))
      )
      .subscribe((countries) => {
        this.countryByRegion.set(countries);
      });
  }

  onCountryChanged() {
    return this.myForm
      .get('country')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('border')!.setValue('')),
        filter( value => value!.length > 0 ),
        switchMap( (alphaCode) =>
          this.countryService.getCountryByAlphaCode( alphaCode ?? '')
        ),
        switchMap(country =>
          this.countryService.getCountryNameByCodeAray( country.borders))
      )

      .subscribe( (borders) => {
        this.bordersByCountry.set(borders);
      })
  }

}
