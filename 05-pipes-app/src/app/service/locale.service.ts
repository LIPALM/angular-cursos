import { Injectable, signal } from "@angular/core";

export type availableLocales = 'es' | 'fr' | 'en';

@Injectable ({providedIn: 'root'})
export class LocaleService {
  private currenLocale = signal<availableLocales>('fr');

  constructor() {
    this.currenLocale.set(
      (localStorage.getItem('locale') as availableLocales) ?? 'fr'
    );
  }

  get getlocale() {
    return this.currenLocale;
  }

  changeLocale(locale: availableLocales) {
    localStorage.setItem('locale', locale);
    this.currenLocale.set(locale);
    window.location.reload();
  }
}

