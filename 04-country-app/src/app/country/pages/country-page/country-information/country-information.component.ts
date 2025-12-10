import { Component, computed, inject, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe, NgIf } from '@angular/common';
import { CountryView } from '../../../interfaces/country-views.interface';

@Component({
  selector: 'country-information-page',
  imports: [DecimalPipe, NgIf],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {
  countryView = input.required<CountryView>();


  currenyYear = computed(() => {
    return new Date().getFullYear();
  })

  getLanguagesDisplay(): string {
    const languages = this.countryView().languages;

    if (!languages || languages.length === 0) {
      return 'No disponible';
    }

    if (languages.length === 1) {
      return languages[0];
    }

    // Mostrar primer idioma + cantidad de idiomas adicionales
    const remaining = languages.length - 1;
    return `${languages[0]} +${remaining}`;
  }
}
