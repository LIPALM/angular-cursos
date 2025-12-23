import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanflyPipe } from '../../pipes/canfly-case.pipe';
import { ColorCasePipe } from '../../pipes/color-case.pipe';
import { HeroTextColorPipe } from "../../pipes/hero-text-color.pipe";
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interface/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';


@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanflyPipe, ColorCasePipe, HeroTextColorPipe,HeroCreatorPipe, HeroSortByPipe, TitleCasePipe, HeroFilterPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('lucas lipa');

  upperCase = signal(false);

  toggleUpperCase() {
    this.upperCase.set(!this.upperCase());
  }

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');
}
