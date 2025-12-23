import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './numbers-page.component.html',
})
export default class NumbersPageComponent {
  numbersell = signal(24_432_123.4567);
  percentage = signal(0.2567);
}
