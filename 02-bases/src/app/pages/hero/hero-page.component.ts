import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


@Component ({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})

export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${ this.name() } - ${ this.age() } años`;
    return description;
  });

  capitalizeName = computed(() => {
    return this.name().toUpperCase();
  });

  changeHero() {
  this.name.set('spiderMan');
  this.age.set(21);
  }

  changeAge() {
  this.age.set(60);
  }

  resetForm() {
  this.name.set('Ironman');
  this.age.set(45);
  }

}
