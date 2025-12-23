import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { routes } from '../../app.routes';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { availableLocales, LocaleService } from '../../service/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe,UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  LocaleService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));


  nameLower = signal('Lucas');
  nameUpper = signal('LUCAS');
  fulanName = signal('LUCas lIpA');

  custonDate = signal(new Date());

  ticking = effect ((onCleanup) => {
    const interval = setInterval(() => {
      this.custonDate.set(new Date());
      console.log('Date updated');
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  })

  changeLocale(locale: availableLocales) {
    console.log('Changing locale to:', locale);
    this.LocaleService.changeLocale(locale);
  }

}
